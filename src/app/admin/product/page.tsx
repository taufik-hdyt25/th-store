// import Home from "@/containers/Home/Home";

import Product from "@/containers/Admin/Product";
import { generateParams } from "@/helpers/generateParams";
import { IParams } from "@/interfaces/IBaseParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda - Aplikasi Saya",
};
const ProductPage = async ({ searchParams, params }: IParams) => {
  const { query } = await generateParams({ searchParams, params });

  return <Product params={query} />;
};

export default ProductPage;
