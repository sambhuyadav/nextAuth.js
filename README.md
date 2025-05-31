# Next.js + NextAuth.js GitHub Auth App

This project is a basic **Next.js** application integrated with **NextAuth.js** using **GitHub OAuth** for authentication. It demonstrates how to securely sign in and out using GitHub, manage sessions, and deploy the app on Vercel.

---

## 🚀 Features

- GitHub OAuth login via NextAuth.js
- Session handling with `useSession()`
- Sign in / Sign out UI
- App Router-compatible with `SessionProvider`
- Deployable on Vercel

---

## 🛠️ Stack

- **Next.js** (App Router)
- **NextAuth.js** for authentication
- **React**
- **Vercel** for deployment

---

## 📁 Folder Structure Notes

- `app/` — uses App Router layout and pages
- `pages/api/auth/[...nextauth].js` — required for NextAuth API routes  
  (must exist even when using App Router)

---

## 🔐 Environment Variables (`.env.local`)

```env
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_random_secret
