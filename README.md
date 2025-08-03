# 📁 FileFlow: Drag-and-Drop File Automation UI

FileFlow is a Zapier-style automation tool designed to let users visually create workflows that automate file-related tasks with cloud storage services like Dropbox, Google Drive, and AWS S3.

## 🚀 Features

- Drag-and-drop visual workflow builder (powered by React Flow)
- Integration with Dropbox, Google Drive, and Amazon S3
- File upload, download, move, and delete actions
- Background job runner for long-running workflows
- WebSocket live updates for workflow status

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, React Flow
- **Backend:** Node.js, Express, TypeScript, BullMQ
- **Database:** Redis (for job queue), PostgreSQL (for logs)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/fileflow-drag-and-drop-automation-ui-typescript.git
cd fileflow-drag-and-drop-automation-ui-typescript
```

### 2. Setup Backend

```bash
cd server
npm install
cp .env.example .env
# Add your API keys and DB configs in the .env file
npx prisma generate
npm run dev
```

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

> The client runs on `http://localhost:5173` and the server on `http://localhost:5000`

---

## 🧩 Example Workflow

1. Upload a file to Dropbox → Convert format → Save to Google Drive
2. Monitor folder on Google Drive → Auto-download to S3

---

## 📁 Project Structure

```
fileflow/
├── client/       # React frontend with React Flow
├── server/       # Express backend with workflow runner
└── README.md
```

---

## 👤 Author

**You!** Built using OpenAI & ChatGPT

---