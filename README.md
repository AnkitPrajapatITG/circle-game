sparkmotion:
  executive_summary:
    title: "SparkMotion - Event Engagement and Data Platform"
    description: |
      SparkMotion is a cutting-edge event engagement and data platform designed to keep interactions alive long after the event has concluded. 
      Through the use of NFC-enabled wearable bands ("SparkBands"), SparkMotion enables a seamless, frictionless experience for event attendees, 
      allowing organizers to track engagement, re-engage attendees post-event, and capture data effortlessly.

  table_of_contents:
    - "Overview"
    - "Core Features"
    - "Installation"
    - "Usage"
    - "Project Structure"
    - "Configuration"
    - "API Endpoints"
    - "Environment & Deployment"
    - "Data Security"
    - "Contributors"

  overview:
    description: |
      SparkMotion offers an integrated platform that combines hardware (NFC wristbands) with software and analytics to improve event engagement. 
      Unlike traditional methods like QR codes or paper pamphlets, SparkMotion makes every touchpoint trackable and extends engagement beyond the physical event, 
      ensuring organizers can continue nurturing relationships.

  core_features:
    - "NFC-enabled SparkBands: SparkBands are physical wristbands containing NFC chips that link to personalized, event-specific microsites when tapped by attendees' smartphones."
    - "Real-time Analytics: Organizers get live insights into event performance, including engagement rates, donation triggers, and more."
    - "Post-event Re-engagement: SparkMotion allows for ongoing communication with attendees, sending follow-ups like thank you messages, event highlights, and more."
    - "Customizable Attendee Experience: Each event has a tailored microsite where attendees can access schedules, donation options, reminders, and more, making the engagement highly relevant and timely."

  installation:
    prerequisites:
      nodejs:
        description: |
          Before you begin, ensure you have **Node.js** installed. If not, you can install it by following these steps:
        steps:
          - "Download and install Node.js from the official website: https://nodejs.org/"
          - "It is recommended to install the **LTS (Long Term Support)** version for stability."
        verify_installation:
          description: |
            To verify your installation, run the following commands in your terminal:
          commands:
            - "node -v"
            - "npm -v"
    setup_steps:
      - "Clone the repository: `git clone https://github.com/yourusername/sparkmotion.git`"
      - "Navigate to the project directory: `cd sparkmotion`"
      - "Install dependencies for backend (Node.js/Express): `cd server && npm install`"
      - "Install dependencies for frontend (React): `cd frontend && npm install`"
      - "Create a `.env` file in the root directory and define the required environment variables:"
      environment_variables:
        - "PORT=5000"
        - "MONGO_URI=mongodb://your-db-uri"
        - "JWT_SECRET=your-jwt-secret"
        - "SPARKBAND_URL=http://your-sparkband-url"
      - "Start the server:"
        commands:
          backend: "npm run dev"
          frontend: "cd frontend && npm start"

  usage:
    description: |
      Once the project is set up:
        - The backend API will run on `http://localhost:5000`
        - The frontend application will run on `http://localhost:3000`
      You can now interact with the admin and organizer dashboards, or test the attendee experience by tapping the SparkBand.

  project_structure:
    description: |
      Here’s an overview of the project structure:
    structure:
      server:
        - "config/                  # Configuration files (e.g., database connection)"
        - "constant/                # Constant values used across the app"
        - "controller/              # Controllers for handling API requests"
        - "middleware/              # Custom middleware functions"
        - "model/                   # Mongoose models"
        - "routes/                  # API routes"
        - "services/                # Logic for database queries and more"
        - "utils/                   # Utility functions"
        - ".env                     # Environment variables (add this to .gitignore)"
        - "index.js                 # Entry point for the backend app"
        - "package.json             # Backend dependencies and scripts"
      frontend:
        - "public/                  # Public assets (images, etc.)"
        - "src/                     # React components, hooks, etc."
        - "package.json             # Frontend dependencies and scripts"
        - ".gitignore               # Files to ignore in version control"
        - "README.md                # Frontend-specific documentation"

  api_endpoints:
    description: |
      Here are the primary API endpoints for interacting with the SparkMotion platform:
    endpoints:
      - "POST /api/events: Create a new event (Admin only)"
      - "GET /api/events/:id/analytics: Fetch event analytics (Organizer access)"
      - "GET /api/events/:id/submissions: List attendee submissions for an event (Organizer access)"
      - "POST /api/tap: Log an NFC band tap event"
      - "POST /api/submit: Store attendee form submission"
      - "GET /api/resolve/:bandId: Resolve the base URL to the destination URL for a given band"

  environment_deployment:
    description: |
      SparkMotion is deployed on DigitalOcean using a MERN stack:
    stack:
      - "Frontend: React"
      - "Backend: Node.js + Express"
      - "Database: MongoDB"
      - "Infrastructure: DigitalOcean"
    deployment_process:
      - "Merge code into the production branch"
      - "Deploy to DigitalOcean with the latest changes"
      - "Set environment variables for MongoDB connection, JWT secret, and other necessary configurations"

  data_security:
    description: |
      SparkMotion handles sensitive attendee data, including personally identifiable information (PII) like emails and phone numbers. Here's how data is managed:
    data_management:
      - "PII is stored in MongoDB and is accessible only by SparkMotion Admin and the assigned Organizers for their events."
      - "Data is encrypted and stored with role-based access control to ensure that only authorized users can view or export sensitive data."
      - "All exports of attendee data are logged for compliance purposes."

  contributors:
    - "SparkMotion - Event Engagement and Data Platform"
