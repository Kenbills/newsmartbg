// ------------------------------------------------------------------
// 1. DATA (Faithful recreation of niches.ts)
// ------------------------------------------------------------------
const createGoal = (name, reqs, minBudgetUSD = 200) => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    requirements: reqs,
    minBudgetUSD
});

const niches = [
    {
        id: 'digital-content-creators',
        name: 'Digital Content Creators',
        goals: [
            createGoal('YouTube Growth', ['Camera Equipment', 'Video Editing', 'Social Media Marketing', 'SEO Tools', 'Analytics'], 500),
            createGoal('TikTok Growth', ['Video Production', 'Paid Ads', 'Trend Research Tools', 'Collaboration Fees', 'Analytics'], 300),
            createGoal('Instagram Growth', ['Content Creation', 'Paid Ads', 'Collaboration Fees', 'Analytics', 'Scheduling Tools'], 300),
            createGoal('Podcast Launch', ['Recording Equipment', 'Audio Editing', 'Hosting Platform', 'Marketing', 'Guest Fees'], 400),
            createGoal('Streaming Launch', ['Streaming Software', 'Graphics Creation', 'Paid Promotion', 'Subscriber Incentives', 'Analytics'], 450),
            createGoal('Digital Course Creation', ['LMS Setup', 'Video Production', 'Marketing', 'Student Support', 'Feedback Analytics'], 600),
            createGoal('E-book Launch', ['Writing Tools', 'Cover Design', 'Paid Ads', 'Distribution Platform Fees', 'Analytics'], 150),
            createGoal('Brand Sponsorship Acquisition', ['Media Kit', 'Outreach Tools', 'Networking', 'Paid Promotion', 'Analytics'], 200),
            createGoal('Merch Launch', ['Product Design', 'Photography', 'Paid Ads', 'E-commerce Fees', 'Customer Support'], 500),
            createGoal('Patreon Growth', ['Content Production', 'Marketing', 'Perks Setup', 'Platform Fees', 'Analytics'], 100),
            createGoal('Instagram Reels Monetization', ['Video Production', 'Paid Ads', 'Collaboration Fees', 'Editing Software', 'Analytics'], 250),
            createGoal('LinkedIn Branding', ['Profile Optimization', 'Content Production', 'Paid Promotion', 'Networking Tools', 'Analytics'], 150),
            createGoal('Digital Event Hosting', ['Platform Hosting', 'Marketing', 'Speaker Fees', 'Video Production', 'Registration Tools'], 400),
            createGoal('NFT Launch', ['Asset Creation', 'Community Management', 'Marketing Campaign', 'Smart Contract Dev', 'Analytics'], 1000),
            createGoal('Collaborative Content Series', ['Content Production', 'Paid Promotion', 'Collaboration Fees', 'Editing', 'Analytics'], 300),
        ]
    },
    {
        id: 'ecommerce-smes',
        name: 'E-commerce SMEs',
        goals: [
            createGoal('Store Launch', ['Platform Subscription', 'Theme/Design', 'Domain Name', 'Payment Gateway Setup', 'Legal Registration'], 300),
            createGoal('Product Photography', ['Camera/Photographer', 'Lighting Setup', 'Editing Software', 'Props', 'Studio Rental'], 200),
            createGoal('Paid Ads Campaign', ['Ad Spend', 'Creative Design', 'Copywriting', 'A/B Testing Tools', 'Agency Fees'], 500),
            createGoal('Email Retargeting', ['Email Marketing Tool', 'Copywriting', 'Template Design', 'List Cleaning', 'Automation Setup'], 100),
            createGoal('Influencer Promotion', ['Influencer Fees', 'Product Seeding', 'Contract Legal', 'Tracking Tools', 'Campaign Mgmt'], 400),
            createGoal('SEO Optimization', ['Audit Tools', 'Content Writing', 'Backlink Strategy', 'Technical Fixes', 'Keyword Research'], 250),
            createGoal('Inventory Management', ['Software Subscription', 'Barcoding Equipment', 'Stock Audits', 'Warehouse Organization', 'Training'], 300),
            createGoal('Customer Support', ['Helpdesk Software', 'Chatbot Integration', 'Staff Training', 'FAQ Content', 'Feedback Tools'], 150),
            createGoal('Packaging Experience', ['Custom Boxes', 'Inserts/Thank You Cards', 'Eco-friendly Materials', 'Design Fees', 'Prototyping'], 200),
            createGoal('Social Media Presence', ['Content Calendar', 'Graphic Design', 'Scheduling Tools', 'Community Mgmt', 'Paid Boosts'], 200),
            createGoal('Sales Funnel Optimization', ['Landing Page Builder', 'Copywriting', 'Heatmap Tools', 'Analytics', 'Conversion Rate Expert'], 300),
            createGoal('Marketplace Expansion', ['Listing Fees', 'Optimization Tools', 'Translation Services', 'Compliance', 'Ad Spend (Platform)'], 250),
            createGoal('Loyalty Program', ['App/Plugin Cost', 'Rewards Funding', 'Marketing Materials', 'Integration', 'Analytics'], 150),
            createGoal('Video Marketing', ['Shooting', 'Editing', 'Scriptwriting', 'Talent', 'Distribution'], 350),
            createGoal('Seasonal Campaign', ['Theme Design', 'Ad Spend', 'Discount Strategy', 'Email Blasts', 'Social Content'], 400),
        ]
    },
    {
        id: 'saas-app-startups',
        name: 'SaaS / App Startups',
        goals: [
            createGoal('MVP Development', ['Dev Tools/Hosting', 'Freelance Devs', 'UI/UX Design', 'Project Mgmt Tools', 'Testing Devices'], 1000),
            createGoal('User Acquisition', ['PPC Ads', 'Content Marketing', 'Social Media', 'Influencers', 'Referral Program'], 500),
            createGoal('App Store Optimization', ['Keyword Tools', 'Screenshot Design', 'Video Preview', 'Localization', 'Rating Mgmt'], 200),
            createGoal('Beta Testing', ['Tester Incentives', 'Feedback Tools', 'Distribution Platform', 'Bug Tracking', 'Analytics'], 150),
            createGoal('Product Hunt Launch', ['Asset Creation', 'Community Outreach', 'Video Demo', 'Copywriting', 'Paid Promotion'], 100),
            createGoal('Onboarding Flow', ['Email Tools', 'In-App Guides', 'Video Tutorials', 'Documentation', 'Feedback Surveys'], 200),
            createGoal('Data Analytics Setup', ['Analytics Platform', 'Event Tracking Dev', 'Dashboard Tools', 'Consultant', 'Privacy Compliance'], 250),
            createGoal('Cold Outreach', ['Lead Gen Tools', 'Email Verification', 'CRM', 'Copywriting', 'LinkedIn Sales Nav'], 300),
            createGoal('Content Marketing Engine', ['Blog Writing', 'SEO Tools', 'CMS Hosting', 'Graphic Design', 'Distribution'], 200),
            createGoal('Customer Success', ['CRM', 'Ticketing System', 'Knowledge Base', 'Webinar Software', 'Staffing'], 400),
            createGoal('Churn Reduction', ['Survey Tools', 'Re-engagement Ads', 'Incentive Budget', 'UX Audit', 'Exit Interviews'], 200),
            createGoal('Security Compliance', ['Audits', 'Pen Testing', 'Compliance Tools', 'Legal Consult', 'Staff Training'], 800),
            createGoal('Partnership Program', ['Affiliate Software', 'Partner Enablement', 'Contracts', 'Marketing Assets', 'Commissions'], 300),
            createGoal('Investor Pitching', ['Deck Design', 'Financial Modeling', 'Legal', 'Networking Events', 'Travel'], 150),
            createGoal('Rebranding', ['Logo Design', 'Brand Guidelines', 'Website Overhaul', 'Asset Updates', 'Launch Campaign'], 500),
        ]
    },
    {
        id: 'podcast-streaming',
        name: 'Podcast & Streaming',
        goals: [
            createGoal('Studio Upgrade', ['Microphones', 'Audio Interface', 'Acoustic Treatment', 'Lighting', 'Camera'], 600),
            createGoal('Live Stream Setup', ['Capture Card', 'Stream Deck', 'OBS Config', 'Green Screen', 'Overlay Design'], 400),
            createGoal('Podcast Launch', ['Hosting Fees', 'Editing Software', 'Cover Art', 'Intro/Outro Music', 'Trailer Promo'], 200),
            createGoal('Guest Management', ['Booking Tools', 'Guest Research', 'Gifts/Incentives', 'Release Forms', 'Comm Tools'], 100),
            createGoal('Audience Growth', ['Paid Ads', 'Social Clips', 'Cross-Promo', 'Giveaways', 'SEO'], 300),
            createGoal('Monetization Strategy', ['Sponsorship Deck', 'Merch Samples', 'Patreon Setup', 'Affiliate Links', 'Legal'], 150),
            createGoal('Video Podcast', ['Video Editing', 'Multi-Cam Setup', 'Thumbnails', 'YouTube Optimization', 'Storage'], 350),
            createGoal('Audio Branding', ['Sonic Logo', 'Original Score', 'Voiceover', 'Sound Effects', 'Mixing'], 250),
            createGoal('Website Presence', ['Domain', 'Hosting', 'Design', 'SEO', 'Email Capture'], 150),
            createGoal('Remote Recording', ['Remote Platform Subs', 'Guest Headsets', 'Backup Recorder', 'Connection Tools', 'Shipping'], 200),
            createGoal('Transcription Services', ['AI Tools', 'Human Editor', 'Blog Integration', 'SEO', 'Subtitle Creation'], 100),
            createGoal('Community Discord', ['Bot Setup', 'Mod Incentives', 'Server Boosts', 'Exclusive Events', 'Graphics'], 50),
            createGoal('Newsletter', ['Email Platform', 'Copywriting', 'Design', 'Lead Magnet', 'Analytics'], 80),
            createGoal('Event Coverage', ['Travel', 'Mobile Gear', 'Access Fees', 'Networking', 'Post-Production'], 500),
            createGoal('Legal & IP', ['Trademarking', 'Music Licensing', 'Contracts', 'Entity Formation', 'Insurance'], 400),
        ]
    },
    {
        id: 'online-course-creators',
        name: 'Online Course Creators',
        goals: [
            createGoal('Course Production', ['Camera/Mic', 'Editing', 'Teleprompter', 'Lighting', 'Set Design'], 400),
            createGoal('LMS Setup', ['Platform Fees', 'Custom Domain', 'Payment Gateway', 'Integrations', 'Design'], 200),
            createGoal('Curriculum Design', ['Research Tools', 'Slide Design', 'Workbook Creation', 'Beta Testers', 'Consultant'], 150),
            createGoal('Pre-Launch Campaign', ['Webinar Software', 'Ad Spend', 'Email Sequence', 'Countdown Tools', 'Affiliates'], 500),
            createGoal('Sales Page', ['Copywriting', 'Design', 'Hosting', 'Video Hosting', 'Conversion Tools'], 300),
            createGoal('Student Community', ['Forum Software', 'Community Mgr', 'Live Q&A Tools', 'Gamification', 'Events'], 200),
            createGoal('Certification Program', ['Badge Design', 'Certificate Software', 'Verification', 'Accreditation', 'Exam Tools'], 150),
            createGoal('Funnel Automation', ['Email Marketing', 'Zapier', 'CRM', 'Deadline Funnel', 'Analytics'], 250),
            createGoal('Affiliate Program', ['Tracking Software', 'Creative Assets', 'Payout Mgmt', 'Recruitment', 'Training'], 200),
            createGoal('High-Ticket Upsell', ['Coaching Application', 'Call Booking', 'Sales Scripts', 'Contract', 'Payment Plans'], 100),
            createGoal('Lead Magnet', ['E-book Design', 'Landing Page', 'Ad Spend', 'Writing', 'Distribution'], 150),
            createGoal('Testimonial Collection', ['Video Tools', 'Incentives', 'Release Forms', 'Editing', 'Hosting'], 100),
            createGoal('Course Update 2.0', ['Reshooting', 'Editing', 'New Graphics', 'Marketing Relaunch', 'Feedback Analysis'], 300),
            createGoal('Membership Site', ['Plugin Costs', 'Content Drip', 'Recurring Billing', 'Exclusive Content', 'Support'], 250),
            createGoal('Translation', ['Translators', 'Subtitling', 'Dubbing', 'Localized Marketing', 'Regional Pricing'], 500),
        ]
    },
    {
        id: 'social-media-agencies',
        name: 'Social Media Agencies',
        goals: [
            createGoal('Agency Launch', ['Website', 'Legal/Contracts', 'Branding', 'Accounting Setup', 'Project Mgmt'], 500),
            createGoal('Client Acquisition', ['Lead Scraping', 'Cold Email', 'Ads for Agency', 'Networking', 'Proposals'], 400),
            createGoal('Content Studio', ['Cameras', 'Lights', 'Backdrops', 'Props', 'Editing PCs'], 800),
            createGoal('Reporting Suite', ['Analytics Tools', 'Dashboard Software', 'Presentation Tools', 'Data Connectors', 'Automation'], 200),
            createGoal('Team Expansion', ['Recruiting Ads', 'Onboarding', 'Training Materials', 'HR Software', 'Payroll Setup'], 300),
            createGoal('Paid Media Tech', ['Ad Spy Tools', 'Pixel Helpers', 'Landing Page Builders', 'Attribution Software', 'Creative Tools'], 300),
            createGoal('Influencer Database', ['Discovery Tools', 'CRM', 'Contact Info', 'Vetting', 'Outreach'], 250),
            createGoal('Asset Library', ['Stock Photo Sub', 'Music Licensing', 'Font Licenses', 'Video Assets', 'Templates'], 150),
            createGoal('Client Onboarding', ['Portal Setup', 'Welcome Kits', 'Audit Tools', 'Strategy Decks', 'Comm Channels'], 100),
            createGoal('Rebranding Services', ['Logo Design', 'Brand Guidelines', 'Mockups', 'Market Research', 'Focus Groups'], 300),
            createGoal('Video Production', ['Shooting', 'Editing', 'Motion Graphics', 'Color Grading', 'Scripting'], 500),
            createGoal('Community Management', ['Social Listening', 'Reply Tools', 'Crisis Mgmt Plan', 'Staffing', 'Sentiment Analysis'], 200),
            createGoal('Trend Research', ['Trend Tools', 'Focus Groups', 'Industry Reports', 'Consultants', 'Subscriptions'], 150),
            createGoal('White Labeling', ['Vendor Vetting', 'Contracts', 'Quality Control', 'Integration', 'Branding'], 200),
            createGoal('Case Study Creation', ['Writing', 'Video Interviews', 'Design', 'Data viz', 'Promotion'], 150),
        ]
    },
    {
        id: 'nft-web3',
        name: 'NFT / Web3 Projects',
        goals: [
            createGoal('Collection Mint', ['Smart Contract Dev', 'Audit', 'Deploy Gas', 'Mint Site', 'Metadata Gen'], 1500),
            createGoal('Community Building', ['Discord Setup', 'Mods', 'Bots', 'Giveaways', 'Events'], 300),
            createGoal('Twitter Marketing', ['Influencers', 'Twitter Spaces', 'Content Calendar', 'Ads', 'Raiding Tools'], 500),
            createGoal('Roadmap Dev', ['Graphic Design', 'Strategy', 'Website Update', 'Whitepaper', 'Video Explainer'], 200),
            createGoal('Art Generation', ['Artist Fees', 'Gen Script', 'Trait Design', 'Rendering', 'Storage'], 600),
            createGoal('Partnerships', ['Collab Mgr', 'Whitelists', 'Cross-Promo', 'Legal', 'Integration'], 200),
            createGoal('Utility Dev', ['Tokenomics', 'Staking Contract', 'DApp UI', 'Backend', 'Testing'], 1000),
            createGoal('Merchandise', ['Design', 'Production', 'Token-Gating', 'Shipping', 'Support'], 400),
            createGoal('IRL Events', ['Venue', 'Ticketing', 'Staff', 'Decoration', 'Security'], 800),
            createGoal('DAO Setup', ['Governance Tools', 'Treasury Mgmt', 'Voting UI', 'Legal Wrapper', 'Onboarding'], 500),
            createGoal('Marketplace Listing', ['Verification', 'Royalty Setup', 'Profile Design', 'Banner Ads', 'Featured Spots'], 200),
            createGoal('Security Audit', ['Firm Fees', 'Bug Bounty', 'Pen Testing', 'Consulting', 'Fix Implementation'], 1000),
            createGoal('Alpha Calling', ['Analyst Fees', 'Tools', 'Subscriptions', 'Networking', 'Report Design'], 300),
            createGoal('Lore Writing', ['Writer Fees', 'World Building', 'Wiki Setup', 'Character Bio', 'Story Arc'], 150),
            createGoal('Post-Mint Marketing', ['Floor Sweeping', 'Secondary Ads', 'PR Articles', 'Hype Sustain', 'Analytics'], 600),
        ]
    }
];

// ------------------------------------------------------------------
// 2. APP STATE & UI ELEMENTS
// ------------------------------------------------------------------
let selectedNiche = null;
let selectedGoal = null;
let currency = 'NGN';
let debounceTimer;

// DOM Elements
const els = {
    nicheSelect: document.getElementById('nicheSelect'),
    goalSelect: document.getElementById('goalSelect'),
    currencySelect: document.getElementById('currencySelect'),
    budgetInput: document.getElementById('budgetInput'),
    currencySymbol: document.getElementById('currencySymbol'),
    resultsSection: document.getElementById('resultsSection'),
    loadingState: document.getElementById('loadingState'),
    emptyState: document.getElementById('emptyState'),
    itemsContainer: document.getElementById('itemsContainer'),
    totalAmountDisplay: document.getElementById('totalAmountDisplay'),
    strictBudgetCard: document.getElementById('strictBudgetCard'),
    strictBudgetMsg: document.getElementById('strictBudgetMsg'),
    themeToggle: document.getElementById('themeToggle'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalTitle: document.getElementById('modalTitle'),
    modalContent: document.getElementById('modalContent')
};

// ------------------------------------------------------------------
// 3. INITIALIZATION & EVENTS
// ------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    populateNiches();
    initTheme();
});

// Event Listeners
els.nicheSelect.addEventListener('change', (e) => {
    selectedNiche = niches.find(n => n.id === e.target.value);
    populateGoals();
    resetResults();
});

els.goalSelect.addEventListener('change', (e) => {
    selectedGoal = selectedNiche.goals.find(g => g.id === e.target.value);
    triggerCalculation();
});

els.currencySelect.addEventListener('change', (e) => {
    currency = e.target.value;
    els.currencySymbol.textContent = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₦';
    triggerCalculation();
});

els.budgetInput.addEventListener('input', triggerCalculation);

els.themeToggle.addEventListener('click', toggleTheme);

// ------------------------------------------------------------------
// 4. CORE LOGIC
// ------------------------------------------------------------------

function populateNiches() {
    niches.forEach(niche => {
        const option = document.createElement('option');
        option.value = niche.id;
        option.textContent = niche.name;
        els.nicheSelect.appendChild(option);
    });
}

function populateGoals() {
    els.goalSelect.innerHTML = '<option value="" disabled selected>Choose specific goal...</option>';
    els.goalSelect.disabled = !selectedNiche;
    
    if (selectedNiche) {
        selectedNiche.goals.forEach(goal => {
            const option = document.createElement('option');
            option.value = goal.id;
            option.textContent = goal.name;
            els.goalSelect.appendChild(option);
        });
    }
}

function triggerCalculation() {
    clearTimeout(debounceTimer);
    const budget = parseFloat(els.budgetInput.value);

    if (selectedNiche && selectedGoal && !isNaN(budget) && budget > 0) {
        debounceTimer = setTimeout(() => {
            fetchAllocation(budget);
        }, 800); // 800ms debounce
    } else {
        resetResults();
    }
}

function resetResults() {
    els.resultsSection.classList.add('hidden');
    els.emptyState.classList.remove('hidden');
    els.loadingState.classList.add('hidden');
}

// ------------------------------------------------------------------
// 5. API INTEGRATION (Backend Fetch)
// ------------------------------------------------------------------
async function fetchAllocation(amount) {
    els.emptyState.classList.add('hidden');
    els.loadingState.classList.remove('hidden');
    els.resultsSection.classList.add('hidden');

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount,
                currency,
                nicheName: selectedNiche.name,
                goal: selectedGoal
            })
        });

        if (!response.ok) {
            throw new Error(`Server Error: ${response.status}`);
        }

        const data = await response.json();
        renderResults(data.items, data.isLowBudget);

    } catch (error) {
        console.error("API Error:", error);
        alert("Unable to generate allocation. Please try again later.");
        resetResults();
    } finally {
        els.loadingState.classList.add('hidden');
    }
}

// ------------------------------------------------------------------
// 6. RENDER LOGIC
// ------------------------------------------------------------------
function renderResults(items, isLowBudget) {
    els.resultsSection.classList.remove('hidden');
    els.itemsContainer.innerHTML = '';

    let total = 0;
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: currency });

    // Handle Strict Budget Logic
    if (isLowBudget) {
        els.strictBudgetCard.classList.remove('hidden');
        let minValDisplay = selectedGoal.minBudgetUSD;
        let sign = '$';
        if (currency === 'EUR') { minValDisplay = Math.round(minValDisplay * 0.95); sign = '€'; }
        if (currency === 'NGN') { minValDisplay = Math.round(minValDisplay * 1500); sign = '₦'; }
        
        els.strictBudgetMsg.textContent = `Your budget is below the recommended minimum (${sign}${minValDisplay.toLocaleString()}). We've prioritized the top 3 items essential for an MVP launch.`;
    } else {
        els.strictBudgetCard.classList.add('hidden');
    }

    // Ensure all items are present (add 0 amount for missing reqs if not strict mode)
    const returnedNames = new Set(items.map(i => i.name));
    selectedGoal.requirements.forEach(req => {
        // Loose match check
        const exists = Array.from(returnedNames).some(n => n.toLowerCase().includes(req.toLowerCase()) || req.toLowerCase().includes(n.toLowerCase()));
        if (!exists && !isLowBudget) {
            items.push({ name: req, amount: 0, description: "Not prioritized." });
        }
    });

    // Render Grid Items
    items.forEach(item => {
        total += item.amount;
        
        const div = document.createElement('div');
        div.className = `group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 ${item.amount === 0 ? 'opacity-60 grayscale-[0.5]' : ''}`;
        
        div.innerHTML = `
            <div class="absolute top-0 left-0 w-1.5 h-full transition-colors ${item.amount > 0 ? 'bg-brand-500 group-hover:bg-brand-400' : 'bg-gray-300'}"></div>
            <div class="p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6">
                <div class="flex-1 min-w-[200px]">
                    <div class="flex items-baseline gap-3 mb-2">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">${item.name}</h3>
                    </div>
                    <p class="text-2xl font-mono font-bold text-gray-900 dark:text-gray-100 tracking-tight">${formatter.format(item.amount)}</p>
                </div>
                <div class="flex-[2] bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 border border-gray-100 dark:border-gray-700/50">
                    <h4 class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Strategy & Tools
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">${item.description}</p>
                </div>
            </div>
        `;
        els.itemsContainer.appendChild(div);
    });

    els.totalAmountDisplay.textContent = formatter.format(total);
}

// ------------------------------------------------------------------
// 7. UTILITIES & MODALS
// ------------------------------------------------------------------

function initTheme() {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) document.documentElement.classList.add('dark');
    renderThemeIcon(isDark);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
    renderThemeIcon(isDark);
}

function renderThemeIcon(isDark) {
    els.themeToggle.innerHTML = isDark 
        ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
}

window.openModal = function(type) {
    let title = '';
    let content = '';

    if (type === 'how') {
        title = 'How It Works';
        content = `
            <p class="font-bold">1. Select Your Niche</p><p class="text-sm mb-2">Choose the category that best fits your digital business.</p>
            <p class="font-bold">2. Pick a Goal</p><p class="text-sm mb-2">Select specific objectives like "YouTube Growth" or "App Launch".</p>
            <p class="font-bold">3. Set Budget</p><p class="text-sm mb-2">Enter your total budget in NGN, USD, or EUR.</p>
            <p class="font-bold">4. AI Allocation</p><p class="text-sm">Our smart AI breaks down your budget into actionable steps using real-world data.</p>
        `;
    } else if (type === 'terms') {
        title = 'Terms of Use';
        content = `
            <p>Allocations are AI estimates, not financial advice. We do not store your data. All calculations happen locally on your device.</p>
        `;
    } else {
        title = 'About SmartBG';
        content = `
            <p>Designed for the modern digital entrepreneur. <br>Built by <strong>Nova Team 3 (Programmify PIP4)</strong>.</p>
            <p class="text-xs text-gray-500 mt-4">
  <a href="mailto:tobiadara77@gmail.com">Contact Us →</a>
</p>
        `;
    }

    els.modalTitle.textContent = title;
    els.modalContent.innerHTML = content;
    
    els.modalOverlay.classList.remove('opacity-0', 'pointer-events-none');
    els.modalOverlay.querySelector('div').classList.remove('scale-95');
    els.modalOverlay.querySelector('div').classList.add('scale-100');
    document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
    els.modalOverlay.classList.add('opacity-0', 'pointer-events-none');
    els.modalOverlay.querySelector('div').classList.remove('scale-100');
    els.modalOverlay.querySelector('div').classList.add('scale-95');
    document.body.style.overflow = 'unset';
};
