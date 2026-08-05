# EchoChat
 
A real-time chat application with live messaging, online presence, and media sharing — built with React, Express, MongoDB, and Socket.IO, with authentication handled by Clerk.
 
## Features
 
- **Real-time messaging** — instant message delivery via Socket.IO, no polling or refresh needed
- **Online presence** — see which of your contacts are currently online
- **Media sharing** — send images and videos in chat, uploaded and served via ImageKit
- **Authentication** — secure sign-in/sign-up powered by Clerk, with automatic profile sync via webhooks
- **Conversation list** — sidebar showing recent chats sorted by latest activity, alongside a full directory of users
- **Theming** — light/dark mode plus a set of accent color presets (Sky, Lavender, Mint, Spotify, Discord, and more)
- **Responsive layout** — adapts between a single-column mobile view and a two-pane desktop layout
## Tech Stack
 
**Frontend**
- React 19 + Vite
- [HeroUI](https://heroui.com) component library
- Tailwind CSS v4
- Zustand for state management
- React Router
- Clerk (`@clerk/react`) for authentication
- Socket.IO client

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- Socket.IO
- Clerk (`@clerk/express`) for auth middleware and webhook verification
- Multer + ImageKit for media uploads
- `cron` for scheduled tasks (keep-alive health check ping)
  
**Deployment**
- Docker (multi-stage build — frontend and backend built separately, served together from one Express instance)
- Render
- Deployment link: https://echochat-ofux.onrender.com/
