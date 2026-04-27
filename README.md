# 🐳 Docker Learning Project

A full-stack web application built to learn and demonstrate **React, FastAPI, Nginx, and Docker Compose** working together in a containerized environment.

This project shows how a frontend, backend, and reverse proxy can be combined into a single deployable system.

---

## ⚙️ Tech Stack

- ⚛️ React (Frontend)
- 🐍 FastAPI (Backend)
- 🌐 Nginx (Reverse Proxy + Static File Server)
- 🐳 Docker & Docker Compose

---

## 🏗️ Architecture

The system works like this:

```
Browser
   ↓
Nginx (port 80)
   ├── "/"      → React Frontend (static files)
   └── "/api"   → FastAPI Backend
```

### Flow:
1. User opens the website
2. Nginx serves the React app
3. React makes API calls to `/api/...`
4. Nginx forwards API requests to FastAPI
5. FastAPI processes request and returns JSON
6. Nginx sends response back to React

---

## 🚀 How to Run

Make sure you have installed:
- Docker
- Docker Compose

### Start the project:

```bash
docker-compose up --build
```

---

## 🌐 Access the App

- Frontend: http://localhost  
- API Base URL: http://localhost/api  

---

## 📡 Example API

### Get Tasks

```http
GET /api/tasks
```

### Response

```json
{
  "tasks": []
}
```

---

### Create Task

```http
POST /api/tasks?title=Buy milk
```

### Response

```json
{
  "id": 1,
  "title": "Buy milk",
  "done": false
}
```

---

## 📁 Project Structure

```
.
├── frontend/        # React application
├── backend/         # FastAPI application
├── nginx/           # Nginx configuration
├── docker-compose.yml
└── README.md
```

---

## 📌 Features

- Full-stack setup with frontend + backend separation  
- Reverse proxy using Nginx  
- Containerized using Docker Compose  
- Simple JSON-based storage (learning purpose)  
- REST API structure  

---

## 🧠 What I Learned

- How Docker containers communicate with each other  
- How Nginx acts as a reverse proxy  
- How to connect React frontend with FastAPI backend  
- How to structure a full-stack project properly  
- Basics of deploying containerized applications  

---

## ⚠️ Notes

- This is a **learning project**, not production-ready  
- No database is used (data is stored in JSON file)  
- Designed for understanding full-stack architecture  

---

## 📄 License

This project is open-source and free to use for learning purposes.
