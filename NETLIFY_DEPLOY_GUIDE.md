# Netlify Deploy Guide — Step by Step

## কেন 404 আসছিল?
Netlify সঠিক folder খুঁজে পাচ্ছিল না। এখন সব fix করা হয়েছে।

---

## Step 1: GitHub এ Upload করো

1. GitHub.com এ যাও → New Repository বানাও (name: `prothoy-portfolio`)
2. এই zip এর সব files সেই repo তে upload করো
3. **গুরুত্বপূর্ণ:** `.env.local` file টা upload করবে না (gitignore এ আছে)

---

## Step 2: Netlify Deploy

1. **netlify.com** → Log in → "Add new site" → "Import an existing project"
2. GitHub select করো → তোমার repo select করো
3. Build settings এ দেখবে automatically fill হয়ে যাবে:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **"Deploy site"** চাপো

---

## Step 3: Environment Variables Set করো (IMPORTANT!)

Deploy হওয়ার পরে:

1. Netlify Dashboard → তোমার site → **Site configuration** → **Environment variables**
2. এই variables add করো:

| Key | Value |
|-----|-------|
| `VITE_ADMIN_EMAIL` | `prothoyck@gmail.com` |
| `VITE_ADMIN_PASSWORD` | তোমার password (যেটা চাও) |

3. **"Save"** করো
4. তারপর **Deploys** → **"Trigger deploy"** → **"Deploy site"** (redeploy করতে হবে)

---

## Step 4: Test করো

- Site URL visit করো → Homepage দেখাবে ✅
- URL এ `/#admin` add করো → Admin login দেখাবে ✅

---

## ⚠️ Common Mistakes

- Environment variables set করার পরে **redeploy** না করলে কাজ করবে না
- `dist` folder কখনো GitHub এ push করবে না
- `.env.local` file কখনো GitHub এ দেবে না

