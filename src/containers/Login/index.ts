"use client"; // WAJIB jika kamu menggunakan komponen klien

import dynamic from "next/dynamic";
const Login = dynamic(() => import("./Login"), {
  ssr: false,
});

export default Login;
