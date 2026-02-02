───────────────────────────────────────────────
          4. Usage (Local)
───────────────────────────────────────────────

Backend  →  http://localhost:5000
Frontend →  http://localhost:3000

Test flow:
1. Create event (admin dashboard)
2. Generate SparkBands / QR fallback
3. Tap band with phone → opens microsite
4. Submit form / donation → see live in analytics

───────────────────────────────────────────────
          5. Project Structure
───────────────────────────────────────────────

.
├── server/                        # MERN Backend
│   ├── config/                    # db, jwt, cloudinary...
│   ├── constants/
│   ├── controllers/
│   ├── middleware/                # auth, validation, error
│   ├── models/                    # Mongoose schemas
│   ├── routes/
│   ├── services/                  # business logic, emails...
│   ├── utils/
│   ├── .env
│   ├── index.js                   # or app.js
│   └── package.json
│
└── frontend/                      # React frontend
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── pages/  or  views/
    │   ├── hooks/
    │   ├── contexts/
    │   ├── services/              # API calls
    │   ├── utils/
    │   ├── styles/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    ├── .env
    └── .gitignore

───────────────────────────────────────────────
          6. Main API Endpoints
───────────────────────────────────────────────

POST   /api/events                Create event (admin)
GET    /api/events/:id            Get event details
GET    /api/events/:id/analytics  Analytics (organizer)
GET    /api/events/:id/submissions Attendee data

POST   /api/tap                   Register NFC tap
POST   /api/submit                Save form submission

GET    /api/resolve/:bandId       Redirect / microsite resolver

───────────────────────────────────────────────
          7. Environment & Deployment
───────────────────────────────────────────────

Stack
├── Frontend: React + Vite / CRA
├── Backend:  Node.js + Express
├── Database: MongoDB
└── Hosting:  DigitalOcean (Droplet / App Platform)

Deployment flow
───────────────
1. git push production branch
2. DigitalOcean pulls & builds
3. Set environment variables in DO dashboard
4. Auto-restart on deploy

───────────────────────────────────────────────
          8. Data Security Highlights
───────────────────────────────────────────────

• PII encrypted at rest (MongoDB Atlas default)
• Role-based access control (Admin / Organizer / Viewer)
• JWT authentication + refresh tokens
• Audit logging for data exports
• No public attendee list endpoints
• HTTPS everywhere
• Rate limiting on sensitive routes

We take attendee trust seriously.
