"use client";

import { Layout } from "@/components";
import { IBaseParams } from "@/interfaces/IBaseParams";

import { Box, Heading, HStack, Text } from "@chakra-ui/react";

import React from "react";
import { FormPost } from "./Partials";

const CreatePost: React.FC<IBaseParams> = ({ params }) => {
  return (
    <Layout type="admin">
      <HStack
        bg={"white"}
        mb={5}
        px={5}
        py={5}
        rounded={"md"}
        shadow={"sm"}
        justify={"space-between"}
      >
        <Box>
          <Heading fontSize={"xl"}>Buat Blog Post</Heading>
          <Text color={"gray"}>Buat blog post anda</Text>
        </Box>
      </HStack>

      <Box bg={"white"} rounded={"xl"} shadow={"sm"} px={5} py={5}>
        <FormPost />
      </Box>
    </Layout>
  );
};

export default CreatePost;
