"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Page() {
  const { user } = useUser();
  return (
    <>
      <div>
        {user ? (
          <a href="/api/auth/logout">Logout</a>
        ) : (
          <a href="/api/auth/login">Login</a>
        )}
      </div>
    </>
  );
}
