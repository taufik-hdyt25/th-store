import CreatePosts from "@/containers/Admin/CreatePost";
import { generateParams } from "@/helpers/generateParams";
import { IParams } from "@/interfaces/IBaseParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Post - Aplikasi Saya",
};
const CreatePostsPage = async ({ searchParams, params }: IParams) => {
  const { query } = await generateParams({ searchParams, params });

  return <CreatePosts params={query} />;
};

export default CreatePostsPage;
