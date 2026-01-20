"use client";

import dynamic from "next/dynamic";

const CreatePosts = dynamic(() => import("./CreatePost"), { ssr: false });

export default CreatePosts;
