# AI Content Generator Dashboard

Full-stack SaaS-style dashboard where users can sign up, log in, generate AI content from prompts, and manage prompt history.

## Features
- JWT Authentication (Signup/Login/Logout)
- Protected Dashboard Route
- Prompt-based content generation API
- MongoDB stored prompt + response history
- View previous responses from history
- Delete history item
- Copy generated response

## Tech Stack
- Frontend: React, React Router, Axios
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Auth: JWT, bcryptjs

## Setup (Local)
### Backend
```bash
cd server
npm install
npm run dev
