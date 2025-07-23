"use client";

import LoginForm from "@/containers/Login/Login";
import { Center } from "@chakra-ui/react";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <Center h={"100vh"}>
      <LoginForm />
    </Center>
  );
};

export default LoginPage;
