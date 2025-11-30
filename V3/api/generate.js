import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
    // CORS Configuration
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'Server Configuration Error: API Key missing' });
        }

        const ai = new GoogleGenAI({ apiKey });

        // Vercel automatically parses JSON body
        const { amount, currency, nicheName, goal } = req.body;

        if (!amount || !currency || !goal || !nicheName) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        // Logic Context Calculation
        const approxUsd = currency === 'USD' ? amount : currency === 'EUR' ? amount * 1.05 : amount / 1500;
        const isLowBudget = approxUsd < goal.minBudgetUSD;

        const budgetContext = isLowBudget
            ? `The provided budget (${amount} ${currency}) is considered LOW for this goal (Minimum recommended is approx ${goal.minBudgetUSD} USD). 
               CRITICAL INSTRUCTION: You MUST allocate the budget ONLY to the top 3 most essential requirement points from the list. 
               Set the amount for the other 2 less critical points to 0. Prioritize functionality and MVP status.`
            : `The provided budget (${amount} ${currency}) is sufficient. Allocate funds intelligently across ALL 5 requirement points based on typical market costs and importance.`;

        // Prompt Construction
        const prompt = `
            Role: Expert Digital Budget Planner.
            Task: Allocate a budget of ${amount} ${currency} for the Goal: "${goal.name}" in the Niche: "${nicheName}".
            Requirement Points: ${goal.requirements.join(', ')}.
            
            ${budgetContext}
            
            For each requirement point, provide a short, actionable 1-sentence description on exactly how to spend this specific amount effectively. 
            IMPORTANT: You MUST suggest specific apps, software, or tools (online or otherwise) relevant to the requirement to help the user achieve it within this budget.
            
            Return the result strictly as a JSON object matching the schema.
        `;

        // Call Gemini API
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        items: {
                            type: "ARRAY",
                            items: {
                                type: "OBJECT",
                                properties: {
                                    name: { type: "STRING" },
                                    amount: { type: "NUMBER" },
                                    description: { type: "STRING" }
                                },
                                required: ["name", "amount", "description"]
                            }
                        }
                    },
                    required: ["items"]
                }
            }
        });

        const data = JSON.parse(response.text);

        // Return successful response
        return res.status(200).json({ 
            items: data.items, 
            isLowBudget 
        });

    } catch (error) {
        console.error("Backend Error:", error);
        return res.status(500).json({ error: 'Failed to generate allocation', details: error.message });
    }
}