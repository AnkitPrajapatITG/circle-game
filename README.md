```

# SparkMotion  
**Event Engagement & Data Platform**  
Powered by NFC SparkBands ✨

───────────────────────────────────────────────
          Executive Summary
───────────────────────────────────────────────

**SparkMotion** is a modern platform that keeps event energy alive **long after the lights go out**.

Using **NFC-enabled wearable bands (SparkBands)**, attendees tap → instant personalized experience.  
Organizers gain:
- Seamless tracking
- Real-time insights
- Powerful post-event re-engagement
- Effortless data capture

Move beyond QR codes and flyers → build lasting connections. 🚀

[Insert visual here: glowing NFC wristband in crowd – e.g. image:9 or image:6]

───────────────────────────────────────────────
          Table of Contents
───────────────────────────────────────────────

1. Overview  
2. Core Features  
3. Installation  
4. Usage  
5. Project Structure  
6. Configuration  
7. API Endpoints  
8. Environment & Deployment  
9. Data Security  
10. Contributors  

───────────────────────────────────────────────
          1. Overview
───────────────────────────────────────────────

**SparkMotion** = **Hardware + Software + Analytics**

• NFC wristbands (SparkBands) link directly to custom microsites  
• Every tap is tracked → real-time + historical data  
• Engagement continues post-event via automated follow-ups  

Unlike static QR codes or pamphlets → **every interaction becomes measurable and extendable**.

[Insert visual here: attendee tapping wristband on phone → opens microsite – e.g. image:3 or image:4 style]

───────────────────────────────────────────────
          2. Core Features
───────────────────────────────────────────────

🔹 **NFC SparkBands**  
Physical wristbands with embedded NFC chips  
Tap smartphone → opens personalized event microsite (no app needed)

🔹 **Real-time Analytics Dashboard**  
Live views: tap counts, engagement heatmaps, donation triggers, form submissions  
Perfect for on-site decisions & post-event reporting  

[Insert visual here: analytics dashboard UI – e.g. image:2]

🔹 **Post-event Re-engagement Engine**  
Automated thank-yous, highlight reels, personalized CTAs  
Turn one-time attendees into long-term supporters

🔹 **Fully Customizable Microsite per Event**  
Schedules • Reminders • Donation/merch links • Feedback forms • Social shares  
Tailored experience = higher relevance & conversion

───────────────────────────────────────────────
          3. Installation
───────────────────────────────────────────────

**Prerequisites**  
• Node.js LTS (v18–v20 recommended) → https://nodejs.org/  
• MongoDB (local or Atlas)  
• Git

**Quick Setup Steps**

```bash
# 1. Clone repo
git clone https://github.com/yourusername/sparkmotion.git
cd sparkmotion

# 2. Backend dependencies
cd server
npm install

# 3. Frontend dependencies
cd ../frontend
npm install

# 4. Create .env (in server/ or root)
# Example minimal .env
PORT=5000
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/sparkmotion
JWT_SECRET=your-very-long-random-secret-here
SPARKBAND_BASE_URL=https://your-domain.com/tap/
Run in development
Bash# Terminal 1: Backend
cd server
npm run dev

# Terminal 2: Frontend
cd frontend
npm start

───────────────────────────────────────────────
4. Usage (Local Development)
───────────────────────────────────────────────
• Backend API → http://localhost:5000
• Frontend App → http://localhost:3000
Test flow:

Admin creates event
Generate SparkBands (or QR fallback)
Simulate tap → microsite loads
Attendee submits form/donation → see live in analytics

───────────────────────────────────────────────
5. Project Structure
───────────────────────────────────────────────
text.
.
├── server/                        # Backend (Node.js + Express + MongoDB)
│   ├── config/                    # DB, JWT, etc.
│   ├── constants/
│   ├── controllers/
│   ├── middleware/                # Auth, validation, errors
│   ├── models/                    # Mongoose schemas
│   ├── routes/
│   ├── services/                  # Business logic, emails, etc.
│   ├── utils/
│   ├── .env                       ⚠️ gitignore!
│   ├── index.js                   # Server entry
│   └── package.json
│
└── frontend/                      # React (Vite / CRA)
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── pages/
    │   ├── hooks/
    │   ├── contexts/
    │   ├── services/              # API layer
    │   ├── utils/
    │   ├── styles/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    ├── .env
    └── .gitignore
───────────────────────────────────────────────
6. Configuration
───────────────────────────────────────────────
Key .env variables:
envPORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=super-secret-key-min-32-chars
SPARKBAND_BASE_URL=https://yourdomain.com/   # Base for band redirects
# Optional
CLOUDINARY_URL=cloudinary://...
EMAIL_SERVICE_USER=...
EMAIL_SERVICE_PASS=...
All sensitive values → never commit to git.
───────────────────────────────────────────────
7. API Endpoints (Core)
───────────────────────────────────────────────
Method,Endpoint,Description,Access
POST,/api/events,Create new event,Admin
GET,/api/events/:id,Get event details,Auth
GET,/api/events/:id/analytics,Real-time + historical analytics,Organizer
GET,/api/events/:id/submissions,List attendee submissions/forms,Organizer
POST,/api/tap,Log NFC tap event,Public
POST,/api/submit,Save form / donation submission,Public
GET,/api/resolve/:bandId,Resolve band → microsite URL (redirect),Public
MethodEndpointDescriptionAccessPOST/api/eventsCreate new eventAdminGET/api/events/:idGet event detailsAuthGET/api/events/:id/analyticsReal-time + historical analyticsOrganizerGET/api/events/:id/submissionsList attendee submissions/formsOrganizerPOST/api/tapLog NFC tap eventPublicPOST/api/submitSave form / donation submissionPublicGET/api/resolve/:bandIdResolve band → microsite URL (redirect)Public
───────────────────────────────────────────────
8. Environment & Deployment
───────────────────────────────────────────────
Stack
Frontend → React
Backend  → Node.js + Express
Database → MongoDB
Hosting  → DigitalOcean (Droplet / App Platform)
Deployment Flow

Merge to production branch
DigitalOcean auto-detects & builds
Set env vars in DigitalOcean dashboard
Service auto-restarts

[Insert visual here: MERN stack diagram – e.g. image:0 or image:1]
───────────────────────────────────────────────
9. Data Security
───────────────────────────────────────────────
• PII (email, phone…) encrypted at rest (MongoDB Atlas)
• Strict role-based access control (Admin / Organizer / Viewer)
• JWT auth + refresh tokens
• All data exports logged for audit/compliance
• Rate limiting on sensitive endpoints
• HTTPS enforced everywhere
• No public attendee lists
Attendee trust is priority #1. 🔒
───────────────────────────────────────────────
```





