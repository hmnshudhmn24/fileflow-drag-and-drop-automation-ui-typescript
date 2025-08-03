# 📁 FileFlow: Drag-and-Drop File Automation UI

## Overview

FileFlow is a Zapier-like drag-and-drop interface to create and manage workflows that perform file automation tasks. Users can visually create flows connecting services like Dropbox, Google Drive, and Amazon S3 to automate common file tasks (uploading, moving, renaming, converting, etc.).

Built with:
- **Frontend**: React + TypeScript + React Flow
- **Backend**: Node.js + Express + TypeScript
- **Storage**: MongoDB
- **Integrations**: Dropbox API, Google Drive API, AWS SDK



## ✨ Features

- Drag-and-drop workflow builder using React Flow
- Authenticated integration with Dropbox, Google Drive, and AWS S3
- Run background jobs for file processing
- Save workflows to MongoDB
- Visual logs and history



## 📁 Folder Structure

```
fileflow-automation-ui/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── index.ts
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
├── .env
└── README.md
```



## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB



### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/fileflow-automation-ui.git
cd fileflow-automation-ui
```



### 2. Setup Backend
```bash
cd backend
npm install
```

#### Environment Variables (`.env`)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/fileflow
DROPBOX_CLIENT_ID=your_client_id
DROPBOX_SECRET=your_secret
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
```

#### Start Backend
```bash
npm run dev
```



### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Open browser at: `http://localhost:5173`



## 🧠 Example Workflow
- Upload a file to Google Drive
- Convert to PDF using built-in plugin
- Move to Dropbox folder automatically



## 🧩 Technologies
- React Flow (Workflow Editor)
- OAuth2 (Dropbox, Google)
- AWS SDK (S3 file ops)
- Background Jobs (BullMQ or node-cron)

  


## 🔐 Authentication
OAuth2 flows handled in backend using Passport.js strategies per provider.
Frontend pops auth window, backend handles token storage.



## 🔧 TODOs
- Add OneDrive integration
- Add file format converters
- Add email notifications for job failures



## 👨‍💻 Contributing
Pull requests welcome! Please include test coverage and follow Prettier formatting.
