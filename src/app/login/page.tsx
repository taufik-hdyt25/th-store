import Login from "@/containers/Login/Login";
import { SessionProviders } from "@/lib/next-auth/providers";
import { NextPage } from "next";
import React from "react";

const LoginPage: NextPage = () => {
  return (
    <SessionProviders>
      <Login />;
    </SessionProviders>
  );
};

export default LoginPage;
