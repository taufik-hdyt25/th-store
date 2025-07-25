import Layout from "@/components/Layout";
import Home from "@/containers/Home/Home";
import { generateParams } from "@/helpers/generateParams";
import { IParams } from "@/interfaces/IBaseParams";
import { getListProductFromAPI } from "@/services/product/product.api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Beranda - Aplikasi Saya",
};
const HomePage = async ({ searchParams, params }: IParams) => {
  const { query } = await generateParams({ searchParams, params });
  const product = await getListProductFromAPI();
  console.log(product);
  return (
    <Layout>
      <Home params={query} />
    </Layout>
  );
};

export default HomePage;
