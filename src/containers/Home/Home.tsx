"use client";

import { IQueryParams } from "@/interfaces/IBaseParams";
import React from "react";

interface IProps {
  params?: IQueryParams;
}

const Home: React.FC<IProps> = ({ params }) => {
  return <div>Home NIH</div>;
};

export default Home;
