// import Home from "@/containers/Home/Home";
import { Dashboard } from "@/containers/Admin/Dashboard";
import { generateParams } from "@/helpers/generateParams";
import { IParams } from "@/interfaces/IBaseParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Aplikasi Saya",
};
const DashboardPage = async ({ searchParams, params }: IParams) => {
  const { query } = await generateParams({ searchParams, params });

  return <Dashboard params={query} />;
};

export default DashboardPage;
