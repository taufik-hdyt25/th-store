// import Home from "@/containers/Home/Home";

import Posts from "@/containers/Admin/Posts";
import { generateParams } from "@/helpers/generateParams";
import { IParams } from "@/interfaces/IBaseParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts - Aplikasi Saya",
};
const PostsPage = async ({ searchParams, params }: IParams) => {
  const { query } = await generateParams({ searchParams, params });

  return <Posts params={query} />;
};

export default PostsPage;
