"use client";

import dynamic from "next/dynamic";

const Posts = dynamic(() => import("./Posts"), { ssr: false });

export default Posts;
