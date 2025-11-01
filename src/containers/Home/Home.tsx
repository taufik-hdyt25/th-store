"use client";

import { Layout } from "@/components";
import { IPagesParams } from "@/interfaces/IBaseParams";
import { Box, Card, Grid, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Home: React.FC<IPagesParams> = ({ params }) => {
  return (
    <Layout>
      <Box px={{ base: 3, md: 10 }} py={5} mt={10}>
        {/* <CarouselHome /> */}

        <Stack spacing={5}>
          <Box>
            <Text w={"fit-content"} fontSize={"22px"} borderBottom={"1px"}>
              Games
            </Text>
            <Grid
              mt={5}
              gap={4}
              justifyContent="center"
              gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            >
              {Array(6)
                .fill(0)
                .map((v, i) => (
                  <Card key={i + "cards"}>
                    <Image
                      src="https://play-lh.googleusercontent.com/r54MhnxVyVOhlNQm5QDkwJqwTbiBDojbQ0ZhC1iGGkZo1Z0upUQuzF8rqVbw-Q91PL2ADXz0SzkK1mrO4xwqug"
                      alt="Green double couch with wooden legs"
                      borderTopRadius="lg"
                    />
                    <Stack my="1" px={1} spacing="3">
                      <Text color="black">Mobile Legends</Text>
                    </Stack>
                  </Card>
                ))}
            </Grid>
          </Box>

          <Box>
            <Text w={"fit-content"} fontSize={"22px"} borderBottom={"1px"}>
              Pulsa
            </Text>
            <Grid
              mt={5}
              gap={4}
              justifyContent="center"
              gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            >
              {Array(6)
                .fill(0)
                .map((v, i) => (
                  <Card key={i + "cards"}>
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/XL_logo_2016.svg/1200px-XL_logo_2016.svg.png"
                      alt="Green double couch with wooden legs"
                      borderTopRadius="lg"
                    />
                    <Stack my="1" px={1} spacing="3">
                      <Text color="black">XL Axiata</Text>
                    </Stack>
                  </Card>
                ))}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Home;
