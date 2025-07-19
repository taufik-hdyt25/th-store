import Home from "@/containers/Home/Home";
import { generateParams } from "@/helpers/generateParams";
import { IParams } from "@/interfaces/IBaseParams";
import React from "react";

const HomePage = async ({ searchParams }: IParams) => {
  const param = await generateParams({ searchParams });

  return <Home params={param} />;
};

export default HomePage;
