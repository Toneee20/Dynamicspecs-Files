# Dynamicspecs Optometrists — Website

**Professional eye care website for Dynamicspecs Optometrists, Vanderbijlpark CBD**

> "Your eye health is our priority."
> 1st Floor, Shop 50, Vaal Gate (Opposite the ATMs), Vanderbijlpark CBD
> Office: 069 842 0548 | WhatsApp: 072 268 8516 | Email: kemmachipi@gmail.com

---

## File Structure

```
GitHub DynamicSpecs/
├── File 1 index.html      ← Main website (links to css + js)
├── File 2 Style.css       ← All styling
├── File 3 Script.js       ← All JavaScript
└── File 4 README.md       ← This file
```

> All 4 files must be uploaded together. They depend on each other.

---

## Step 1 — Deploy to Vercel (Free)

### 1A — Create GitHub Account
1. Go to **https://github.com** → Sign up (free)
2. Verify your email

### 1B — Create Repository
1. Click **+** (top right) → **New repository**
2. Name: `dynamicspecs-site`
3. Set to **Public**
4. Click **Create repository**

### 1C — Upload All 4 Files
1. Click **"uploading an existing file"**
2. Drag all 4 files into the upload area:
   - `File 1 index.html`
   - `File 2 Style.css`
   - `File 3 Script.js`
   - `File 4 README.md`
3. Commit message: `Dynamicspecs website launch`
4. Click **Commit changes**

### 1D — Connect to Vercel
1. Go to **https://vercel.com** → Sign up with GitHub
2. Click **Add New Project**
3. Select `dynamicspecs-site` → **Import**
4. Leave all settings as default
5. Click **Deploy**
6. ✅ Your site is live in ~30 seconds!

---

## Step 2 — Get Your Live URL

After deployment Vercel gives you a URL like:
```
https://dynamicspecs-site.vercel.app
```

Copy that URL — you need it for Step 3.

---

## Step 3 — Update Blog "Learn More" Links

The blog articles currently contain this placeholder in the links:
```
https://YOUR-DOMAIN.vercel.app
```

Once you have your live Vercel URL, do a find-and-replace:

1. Go to your GitHub repository
2. Click **File 1 index.html**
3. Click the **pencil icon** (Edit file)
4. Press **Ctrl+H** (Find and Replace in browser)
   - Find: `YOUR-DOMAIN.vercel.app`
   - Replace with: `dynamicspecs-site.vercel.app` (your actual URL)
5. Click **Commit changes**
6. Vercel auto-redeploys in 30 seconds ✅

**If you get a custom domain (e.g. dynamicspecs.co.za):**
Replace `YOUR-DOMAIN.vercel.app` with `dynamicspecs.co.za`

---

## Step 4 — Custom Domain (Optional)

To use **dynamicspecs.co.za** instead of the Vercel URL:
1. Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Type `dynamicspecs.co.za` → **Add**
3. Vercel shows you 2 DNS records
4. Log into your domain registrar (Afrihost / Domains.co.za)
5. Go to **DNS Settings** → add the 2 records Vercel gives you
6. Wait up to 24 hours for DNS propagation
7. Free HTTPS certificate included automatically ✅

---

## Making Future Updates

1. Go to GitHub repository
2. Click the file you want to change
3. Click the **pencil icon**
4. Make your changes
5. Click **Commit changes**
6. Vercel automatically redeploys — live in 30 seconds

---

## Contact Details Reference

| Purpose      | Number / Address           | Type              |
|-------------|---------------------------|-------------------|
| Office Calls | 069 842 0548              | Calls only        |
| WhatsApp     | 072 268 8516              | WhatsApp only     |
| Bookings     | kemmachipi@gmail.com      | Email / booking forms |
| Location     | Shop 50, 1st Floor, Vaal Gate, Vanderbijlpark CBD | |

---

## Trading Hours

| Day              | Hours              |
|-----------------|--------------------|
| Monday – Friday  | 09:00 AM – 5:00 PM |
| Saturday         | 10:00 AM – 2:00 PM |
| Sunday           | Closed             |
| Public Holidays  | Closed             |

---

*Website created and maintained by [Autosageai.co.za](https://autosageai.co.za)*
*Copyright © 2026 Dynamicspecs Optometrists. All rights reserved.*
