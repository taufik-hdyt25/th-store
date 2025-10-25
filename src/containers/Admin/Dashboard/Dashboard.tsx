"use client";

import { Layout } from "@/components";
import { IBaseParams } from "@/interfaces/IBaseParams";

import { Heading, HStack } from "@chakra-ui/react";
import React from "react";

const Dashboard: React.FC<IBaseParams> = ({ params }) => {
  return (
    <Layout type="admin">
      <HStack
        bg={"white"}
        mb={5}
        px={3}
        py={5}
        rounded={"md"}
        shadow={"sm"}
        justify={"space-between"}
      >
        <Heading fontSize={"xl"}>Dashboard</Heading>
      </HStack>
    </Layout>
  );
};

export default Dashboard;
