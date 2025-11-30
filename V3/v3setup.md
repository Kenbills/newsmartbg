# SmartBG V3 - Vercel Deployment Guide

This guide explains how to deploy the V3 version of SmartBG to Vercel. This version uses **Vercel Serverless Functions** to securely handle the Google Gemini API key.

## Prerequisites

1.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com/).
2.  **GitHub Account**: For deploying via git (recommended).
3.  **Google Gemini API Key**: Get one from [Google AI Studio](https://aistudio.google.com/).

## Project Structure

*   `V3/index.html`: The Frontend.
*   `V3/api/generate.js`: The Backend (Vercel Serverless Function).
*   `V3/package.json`: Dependencies for the backend function.

---

## Option 1: Deploy via GitHub (Recommended)

1.  **Push Code**:
    *   Push your project to a GitHub repository.

2.  **Create New Project on Vercel**:
    *   Log in to Vercel.
    *   Click **"Add New..."** > **"Project"**.
    *   Import your GitHub repository.

3.  **Configure Project**:
    *   **Root Directory**: Click "Edit" next to Root Directory and select `V3`.
    *   **Framework Preset**: Select "Other" (since this is vanilla JS + Serverless).
    *   **Build Command**: Leave empty (default).
    *   **Output Directory**: Leave empty (default).

4.  **Add Environment Variable (Crucial)**:
    *   Expand the **"Environment Variables"** section.
    *   **Key**: `API_KEY`
    *   **Value**: Paste your Google Gemini API Key here.
    *   Click **Add**.

5.  **Deploy**:
    *   Click **"Deploy"**.

---

## Option 2: Deploy via Vercel CLI

1.  **Install Vercel CLI**:
    ```bash
    npm install vercel -g
    ```

2.  **Login**:
    ```bash
    vercel login
    ```

3.  **Deploy**:
    *   Navigate to the `V3` directory in your terminal:
        ```bash
        cd path/to/V3
        ```
    *   Run the deploy command:
        ```bash
        vercel
        ```
    *   Follow the prompts:
        *   Set up and deploy? **Y**
        *   Which scope? **(Select your account)**
        *   Link to existing project? **N**
        *   Project name? **smartbg-v3**
        *   In which directory is your code located? **./**
        *   Want to modify these settings? **N**

4.  **Set Environment Variable**:
    *   Go to your new project dashboard on Vercel.
    *   Navigate to **Settings** > **Environment Variables**.
    *   Add `API_KEY` with your Gemini key.
    *   **Redeploy** (go to Deployments tab, click the 3 dots on the latest deployment -> Redeploy) for the key to take effect.

## Troubleshooting

*   **404 on API Call**: Ensure your `api` folder is inside the root directory you deployed (e.g., inside `V3`).
*   **500 Error**: Check Vercel Logs (Dashboard -> Project -> Logs). It usually means the `API_KEY` is missing.
