# Hisn al-Muslim — Play Store Upload Guide
## Complete Step-by-Step Instructions

---

## 📁 Your Files

```
hisnul-muslim/
├── index.html        ← Main app (rename if needed, keep as index.html)
├── manifest.json     ← PWA manifest (links app to Play Store)
├── sw.js             ← Service worker (enables offline use)
├── icons/            ← App icons (YOU MUST CREATE THESE)
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png   ← Most important
│   ├── icon-384.png
│   └── icon-512.png   ← Required for Play Store
└── screenshots/       ← Play Store screenshots (YOU MUST CREATE THESE)
    ├── home.png
    ├── morning.png
    └── evening.png
```

---

## STEP 1 — Create Your App Icon

1. Design a **512×512 px** square PNG icon
   - Suggested design: gold crescent/star on dark navy background
   - Or Arabic calligraphy of "حصن" on dark background
   - Keep important content in the **center 80%** (maskable safe zone)

2. Go to **https://www.pwabuilder.com/imageGenerator**
   - Upload your 512×512 icon
   - Click **Generate** — it outputs all sizes automatically
   - Download the ZIP and extract into your `icons/` folder

---

## STEP 2 — Host on GitHub Pages (Free)

1. Go to **https://github.com** → Sign up / Sign in

2. Click **"New repository"**
   - Name: `hisnul-muslim`
   - Set to **Public**
   - Click **Create repository**

3. Upload your files:
   - Click **"uploading an existing file"**
   - Drag all files: `index.html`, `manifest.json`, `sw.js`
   - Create `icons/` folder and upload all icon PNGs
   - Click **Commit changes**

4. Enable GitHub Pages:
   - Go to **Settings** → **Pages**
   - Source: **Deploy from a branch** → branch: **main** → folder: **/ (root)**
   - Click **Save**
   - Your URL will be: `https://YOUR-USERNAME.github.io/hisnul-muslim`

5. Wait ~2 minutes, then test your URL in the browser.

---

## STEP 3 — Run PWABuilder

1. Go to **https://www.pwabuilder.com**

2. Enter your GitHub Pages URL:
   ```
   https://YOUR-USERNAME.github.io/hisnul-muslim
   ```

3. Click **Start** — it scans your manifest and service worker

4. You should see a **green score** (90+). If not, check:
   - ✅ manifest.json is linked in index.html
   - ✅ sw.js is registered
   - ✅ Icons exist at the correct paths
   - ✅ Site is served over HTTPS (GitHub Pages does this automatically)

5. Click **"Package for stores"**

6. Choose **Google Play**

7. Fill in the form:
   - **Package ID**: `com.yourname.hisnulmuslim` (use your name, no spaces)
   - **App name**: `Hisn al-Muslim`
   - **App version**: `1.0.0`
   - **Version code**: `1`
   - **Signing key**: Click **"Generate new"** (save the keystore file — you need it for updates!)

8. Click **Download** — you get a ZIP containing:
   - `app-release.aab` ← Upload this to Play Store
   - Signing key files ← Keep these SAFE forever

---

## STEP 4 — Create Play Store Listing

1. Go to **https://play.google.com/console**

2. Pay the **$25 one-time developer fee**

3. Click **"Create app"**:
   - App name: `Hisn al-Muslim - Fortress of the Muslim`
   - Default language: `English`
   - App or game: `App`
   - Free or paid: `Free`
   - Accept policies → **Create app**

---

## STEP 5 — Fill the Store Listing

### Main Store Listing
| Field | Value |
|-------|-------|
| **App name** | Hisn al-Muslim - Fortress of the Muslim |
| **Short description** (80 chars) | Complete Islamic du'as & adhkar with Arabic, transliteration & translation |
| **Full description** | See below |
| **App icon** | Your 512×512 PNG |
| **Feature graphic** | 1024×500 px banner image |
| **Phone screenshots** | Min 2, max 8 screenshots (1080×1920 px) |

### Suggested Full Description
```
حصن المسلم — Hisn al-Muslim (Fortress of the Muslim)

A beautiful, complete digital edition of the beloved Islamic supplication book 
by Sheikh Sa'id ibn Wahf al-Qahtani (رحمه الله).

📖 CONTENTS (15+ Chapters):
• Morning Adhkar (أذكار الصباح) — 20 authentic du'as
• Evening Adhkar (أذكار المساء) — 20 authentic du'as  
• Before Sleeping (أذكار النوم)
• Upon Waking Up
• Prayer Supplications (Ruku, Sujud, Tashahhud)
• After Prayer Adhkar
• Du'a for the Adhan
• Eating & Food Supplications
• Entering & Leaving Home
• Entering the Masjid
• Travel Du'as
• Du'a in Distress & Anxiety
• Seeking Forgiveness
• Rain & Weather Du'as
• Du'a for the Sick & Ill
• Qur'anic Du'as
• Tasbih & General Dhikr

✨ FEATURES:
• Full Arabic text in beautiful Scheherazade calligraphy font
• English transliteration for every du'a
• English translation/meaning
• Hadith source references
• Individual repeat counter for each du'a
• Dot indicators for short repeats
• Progress bar per chapter
• Offline use — works without internet
• Book-style design with elegant parchment theme
• Table of contents with quick navigation
• Home screen shortcuts for Morning & Evening Adhkar

All du'as are authenticated from the Qur'an and authentic Sunnah.
May Allah accept from all of us. آمين
```

### Content Rating
- Go to **Policy → App content → Content ratings**
- Start questionnaire → Category: **Reference** 
- Answer No to all sensitive content questions
- You'll receive rating: **Everyone** ✅

### Category
- **Books & Reference** or **Education**

---

## STEP 6 — Upload Your App

1. Go to **Production → Releases → Create new release**

2. Click **Upload** → select your `app-release.aab` file

3. Add release notes:
   ```
   Initial release of Hisn al-Muslim — Complete Book of Islamic Remembrance.
   Includes 15+ chapters of authentic du'as with Arabic text, transliteration, 
   and English translation. Full offline support.
   ```

4. Click **Save** then **Review release**

5. Fix any warnings shown (usually about target SDK — PWABuilder handles this)

6. Click **Start rollout to Production**

---

## STEP 7 — Wait for Review

- Google reviews new apps in **1–7 days** (usually 2–3 days)
- You'll receive an email when approved or if changes are needed
- Check **Play Console → Inbox** for any policy issues

---

## ⚠️ IMPORTANT NOTES

**Keep your keystore file safe!**
The `.keystore` file PWABuilder generates is required for ALL future updates.
If you lose it, you cannot update your app — you'd need to publish a new one.
Store it in Google Drive, Dropbox, or email it to yourself.

**Privacy Policy (Required)**
Google requires a privacy policy URL. Generate one free at:
https://www.privacypolicygenerator.info
- App name: Hisn al-Muslim
- Check: No personal data collected, No ads
- Host it on GitHub Pages as `privacy-policy.html`

**Future Updates**
When you update the app:
1. Edit `index.html` on GitHub
2. Bump version in `manifest.json`  
3. Re-run PWABuilder with same keystore
4. Upload new AAB to Play Console → new release

---

## 🔗 Quick Links

| Resource | URL |
|----------|-----|
| GitHub | https://github.com |
| PWABuilder | https://www.pwabuilder.com |
| Icon Generator | https://www.pwabuilder.com/imageGenerator |
| Play Console | https://play.google.com/console |
| Privacy Policy Generator | https://www.privacypolicygenerator.info |
| Free Screenshot Tool | https://www.screely.com |

---

*بارك الله فيكم — May Allah bless you in this effort*
