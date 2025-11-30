# SmartBG - Smart Budget Allocator

## Overview
SmartBG is a streamlined, single-page web application designed to help digital entrepreneurs allocate their startup capital effectively. It is built with a **"Lean & Secure"** architecture, separating the client-side user interface from the server-side AI logic to ensure API key security and high performance.

## Architecture

### Frontend (Client-Side)
*   **Tech Stack**: Vanilla JavaScript (ES Modules), HTML5, CSS3.
*   **Styling**: Tailwind CSS (via CDN) for rapid, responsive UI development.
*   **Responsibility**: Handles user inputs, manages application state (selected niche, goal, budget), renders UI components (forms, results table, modals), and communicates with the backend via `fetch`.
*   **Key Files**: `index.html`, `script.js`, `styles.css`.

### Backend (Server-Side)
*   **Tech Stack**: Node.js running on Vercel Serverless Functions.
*   **Responsibility**: 
    1.  Securely holds the `API_KEY` environment variable.
    2.  Validates incoming requests from the frontend.
    3.  Constructs the prompt logic and context.
    4.  Interacts with the Google Gemini API.
*   **Key File**: `api/generate.js`.

---

## AI Usage & Logic

### Model
We utilize **Google Gemini 2.5 Flash** (`gemini-2.5-flash`) via the `@google/genai` SDK. This model is chosen for its speed, cost-effectiveness, and ability to follow complex instructions regarding JSON schema outputs.

### The Logic Flow
1.  **Context Calculation**: 
    Before calling the AI, the backend calculates the approximate USD value of the user's budget.
    *   If the budget < `minBudgetUSD` (defined in the goal data), the system flags it as **"Low Budget"**.
    *   Otherwise, it is **"Sufficient"**.

2.  **Prompt Engineering**:
    The backend constructs a dynamic prompt based on the context:
    *   **Standard Mode**: "Allocate funds intelligently across ALL 5 requirement points."
    *   **MVP Mode (Low Budget)**: "CRITICAL INSTRUCTION: You MUST allocate the budget ONLY to the top 3 most essential requirement points... Set the amount for the other 2 less critical points to 0."

3.  **Structured Output**:
    The API requests a specific **JSON Schema** response. This ensures the AI returns a strictly formatted JSON object containing an array of items with `name`, `amount`, and `description`. This prevents parsing errors on the frontend.

---

## Application Flow

1.  **Selection**: The user selects a broad "Niche" (e.g., SaaS Startups) and a specific "Goal" (e.g., MVP Development).
2.  **Input**: The user enters a total budget and selects a currency (USD, EUR, NGN).
3.  **Debounce**: The frontend waits for the user to stop typing (800ms) before triggering the request.
4.  **Request**: The frontend sends a `POST` request to `/api/generate` containing the user's selection.
5.  **Processing**: 
    *   The Vercel function receives the request.
    *   It initializes the Gemini client with the secure server-side API key.
    *   It sends the prompt to Gemini.
6.  **Response**: 
    *   Gemini generates the allocation strategy.
    *   The backend parses the response and adds the `isLowBudget` flag.
    *   The JSON data is sent back to the browser.
7.  **Rendering**: 
    *   The frontend displays the "Strict Budget Mode" warning if applicable.
    *   It renders a clean, interactive list of budget items with actionable advice.
