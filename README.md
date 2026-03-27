# Medzora - Split Frontend/Backend

This repository is now separated for independent deployment.

## Project Structure

- `frontend/` -> React + Vite app
- `backend/` -> Flask API service

## Local Development

Run both services in separate terminals.

### Backend

```bash
cd backend
pip install -r requirements.txt
python python_api.py
```

Backend runs on `http://127.0.0.1:5000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

## Environment Variables

This project reads `.env.local` from repository root for local development.

Recommended keys:

- `GEMINI_API_KEY`
- `SERP_API_KEY`
- `JWT_SECRET_KEY`
- `DATABASE_URL`
- `DOCTOR_SIGNUP_CODE`
- `VITE_API_URL` (optional for frontend production; in local dev proxy defaults to backend)

## Deployment

### Frontend Deployment (Vercel)

Use `frontend/` as the project root in Vercel.

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

Set frontend env vars in Vercel:

- `GEMINI_API_KEY`
- `VITE_API_URL` (set to your deployed backend URL, example: `https://your-backend.onrender.com`)

### Backend Deployment (Render/Railway/Fly.io)

Use `backend/` as the service root.

- Install command: `pip install -r requirements.txt`
- Start command: `gunicorn python_api:app`

Set backend env vars in your backend platform:

- `JWT_SECRET_KEY`
- `DATABASE_URL`
- `DOCTOR_SIGNUP_CODE`
- `SERP_API_KEY`

## Notes

- Frontend expects API under `/api` locally and uses Vite proxy to `127.0.0.1:5000`.
- In production set `VITE_API_URL` to your backend base URL.
