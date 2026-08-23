# AIML Club OCT — Email Subscription System Setup Guide

This document explains the architecture, setup instructions, and management guide for the free-first email subscription system integrated into `social.aimlcluboct.in`.

---

## 1. Selected Email Provider: Brevo (formerly Sendinblue)

### Why Brevo?
- **100% Free Contact Storage**: Brevo allows unlimited stored contacts/subscribers on the free plan with zero monthly cost.
- **300 Emails/Day**: Free tier includes 300 daily transactional/newsletter emails.
- **Native Contact List Management**: Provides a built-in web dashboard to view, search, tag, segment, export, and delete subscribers.
- **Automated Unsubscribe**: Automatically handles unsubscribe links and unsubscribed contact status per anti-spam laws.

---

## 2. What Is Needed From Brevo (Step-by-Step Account Setup)

### Step 1: Create a Free Brevo Account
1. Visit [https://brevo.com](https://brevo.com) and click **Sign up for free**.
2. Complete account registration (Company/Club Name: `AI & Machine Learning Club OCT`).

### Step 2: Create a Contact List for AIML Club OCT
1. Log in to the Brevo Dashboard.
2. Navigate to **Contacts** -> **Lists** on the left menu.
3. Click **Create a list**.
4. Name the list (e.g., `AIML Club OCT Subscribers`).
5. Note down the **List ID** displayed next to your list (e.g., `2`).

### Step 3: Obtain your Brevo API Key
1. In the top-right user menu, click on your profile name and select **SMTP & API**.
2. Go to the **API Keys** tab.
3. Click **Generate a new API key**.
4. Name the key (e.g., `AIML Digital Hub Website`).
5. Copy the generated API key (starts with `xkeysib-...`).

---

## 3. Environment Variables Configuration

Add the following environment variables:

### Local Development (`.env.local`)
Create a file named `.env.local` in `aiml-hub/`:

```env
EMAIL_PROVIDER=brevo
EMAIL_API_KEY=xkeysib-YOUR_ACTUAL_BREVO_API_KEY
EMAIL_LIST_ID=2
```

### Production Deployment (Vercel)
1. Go to your Vercel Project Dashboard (`aiml-hub`).
2. Go to **Settings** -> **Environment Variables**.
3. Add the following keys:
   - `EMAIL_PROVIDER`: `brevo`
   - `EMAIL_API_KEY`: `xkeysib-YOUR_ACTUAL_BREVO_API_KEY`
   - `EMAIL_LIST_ID`: `2` (or your specific list ID)
4. Redeploy or push to `main` for changes to take effect.

---

## 4. Architecture & Provider Abstraction

```
Client Browser (Subscription Form)
        │
        ▼ (POST /api/subscribe)
Server Route Handler (app/api/subscribe/route.ts)
  - Input Validation & Normalization
  - Rate Limiting (5 req/min per IP)
        │
        ▼
Newsletter Adapter (app/lib/newsletter.ts)
  ├── Brevo Adapter (Default API v3)
  ├── Resend Adapter (Optional)
  └── Dev Fallback Mode (If API key is missing)
        │
        ▼
Brevo API (https://api.brevo.com/v3/contacts)
```

- **Zero Client-Side Exposure**: API Keys are evaluated strictly on the server (`process.env.EMAIL_API_KEY`).
- **Dev Mode Graceful Fallback**: If `EMAIL_API_KEY` is not set, the API operates in Dev Fallback mode (logging subscription requests to server console while responding successfully to UI), allowing full local development without breaking the app.
- **Provider Switching**: To switch to another provider (e.g. Resend), set `EMAIL_PROVIDER=resend` and `EMAIL_API_KEY=re_...`.

---

## 5. How to Test the Subscription System

1. Start the dev server (`npm run dev`) or test live at `https://social.aimlcluboct.in`.
2. Scroll to **"Stay in the loop."** card.
3. **Test Invalid Email**: Type `invalid-email` -> Displays: *"Please enter a valid email address."*
4. **Test Valid Email**: Type `test.student@gmail.com` and click **Subscribe**.
   - Spinner activates, button disables.
   - On success -> Displays: *"You're in. We'll keep you updated."*
5. **Test Duplicate Email**: Re-enter `test.student@gmail.com` and click **Subscribe**.
   - API detects existing contact -> Displays: *"You're already on the list."*
6. **Verify in Brevo**:
   - Open Brevo Dashboard -> **Contacts** -> **Lists**.
   - Confirm `test.student@gmail.com` appears in the subscriber list.

---

## 6. How to Manage & Send Newsletters / Unsubscribe

- **View & Export Subscribers**: Go to Brevo Dashboard -> **Contacts** -> Select list -> Click **Export contacts**.
- **Send Newsletters**: Go to Brevo Dashboard -> **Campaigns** -> **Create an email campaign**. Select your subscriber list and send your update.
- **Unsubscribe Handling**: Brevo automatically includes standard unsubscribe links in all email campaigns. Unsubscribed contacts are automatically updated in the database.
