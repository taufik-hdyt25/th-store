import { generateParams } from "@/helpers/generateParams";
import { IParams } from "@/interfaces/IBaseParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda - Aplikasi Saya",
};
const DetailHome = async ({ searchParams, params }: IParams) => {
  const { param, query } = await generateParams({ searchParams, params });
  console?.log(query);
  return <div>ID : {param?.id}</div>;
};

export default DetailHome;
