"use client";

import dynamic from "next/dynamic";

const Product = dynamic(() => import("./Product"), { ssr: false });

export default Product;
