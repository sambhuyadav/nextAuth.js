"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>NextJs Authentication</h1>
        <p>Welcome, {session.user?.name}!</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>NextJs Authentication</h1>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </div>
  );
}