# NexaAI — Futuristic AI Enterprise Platform Website

A modern, responsive, and glassmorphic website for **NexaAI**, an AI-powered enterprise technology company. Built for **AI Website Generation – Task 3**.

---

## ✨ Features

- **Futuristic Glassmorphism UI**: Multi-layered frosted glass panels, glowing gradients, subtle borders, and smooth rounded corners.
- **Interactive AI Operations Dashboard**: Live throughput waveform, telemetry stream, and interactive task execution sandbox.
- **Comprehensive Solution Lifecycle**: 3-step structured timeline (Understand, Build, Transform).
- **Service Explorer**: 6 specialized AI capabilities with dedicated interactive modal details.
- **ROI & Pilot Calculator**: Interactive team size estimation tool with real-time projected time and cost savings.
- **Enterprise Contact System**: Fully validated consultation form with real-time feedback and toast notifications.
- **100% Mobile Responsive**: Seamless layout transitions from desktop to tablet and mobile viewports.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Vanilla CSS & CSS Modules (Glassmorphism design tokens)
- **Icons**: Lucide React + Inline SVGs
- **Typography**: Outfit, Plus Jakarta Sans, JetBrains Mono (Google Fonts)

---

## 🌐 Deploying to Render (Recommended)

This repository is **Render-Ready** with `render.yaml` blueprint configuration and `_redirects` for SPA routing.

### Option A: Automatic Blueprint Deploy (Fastest)
1. Log in to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** → **Blueprint**.
3. Connect your repository: `https://github.com/SparshKashyap3112/InAmigos-Task1-Portfoilio11`.
4. Click **Apply** — Render will automatically read `render.yaml` and deploy the static site!

### Option B: Manual Static Site Deploy
1. On Render Dashboard, click **New +** → **Static Site**.
2. Connect your GitHub repository.
3. Configure the following build settings:
   - **Name:** `nexa-ai-website`
   - **Branch:** `main`
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Create Static Site**.

---

## 🚀 Local Development

### 1. Clone Repository
```bash
git clone https://github.com/SparshKashyap3112/InAmigos-Task1-Portfoilio11.git
cd InAmigos-Task1-Portfoilio11
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000/` in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 📄 License
MIT
