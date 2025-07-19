"use client";

import { signIn } from "next-auth/react";
import React from "react";

const Login: React.FC = () => {
  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/",
        })
      }
    >
      Login dengan Google
    </button>
  );
};

export default Login;
