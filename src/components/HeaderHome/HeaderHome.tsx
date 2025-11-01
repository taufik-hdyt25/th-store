"use client";

import { categories } from "@/containers/Home/dummy";
import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React, { JSX, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const HeaderHome: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <Flex
      py={3}
      px={{ base: 3, md: 8 }}
      align={"center"}
      gap={2}
      justify={"space-between"}
    >
      <HStack>
        <Image w={12} src="/logo.png" />
        <Text color={"white"} fontSize={"3xl"} textStyle={"lobster"}>
          Store
        </Text>
      </HStack>

      <HStack spacing={5}>
        {categories.map((v, i) => (
          <Button
            variant={"unstyled"}
            key={i + "cats"}
            flexShrink={0}
            color={"white"}
          >
            {v.name}
          </Button>
        ))}
      </HStack>
    </Flex>
  );
};

export default HeaderHome;
