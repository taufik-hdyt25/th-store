"use client";

import { Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Center h={"100vh"}>
      <Box textAlign="center" py={20} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Halaman tidak ditemukan
        </Text>
        <Text color={"gray.500"} mb={6}>
          Halaman yang kamu cari tidak ada.
        </Text>

        <Link href="/">
          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            Kembali ke Beranda
          </Button>
        </Link>
      </Box>
    </Center>
  );
}
