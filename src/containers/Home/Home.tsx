"use client";

import { Background, Layout } from "@/components";
import { IPagesParams } from "@/interfaces/IBaseParams";
import { Box, Button, HStack, Image } from "@chakra-ui/react";
import React from "react";

const Home: React.FC<IPagesParams> = ({ params }) => {
  return (
    <Layout>
      <Background>
        <Box px={10} py={5}>
          <Image
            w={"full"}
            h={"200px"}
            src="https://www.apridesain.id/blog/wp-content/uploads/2021/06/banner-adalah.jpg"
          />

          <HStack mt={10}>
            <Button>Pulsa</Button>
            <Button>Game</Button>
            <Button>Voucer</Button>
            <Button>EMoney</Button>
          </HStack>
        </Box>
      </Background>
    </Layout>
  );
};

export default Home;
