import { Box } from "@chakra-ui/react";
import React, { JSX, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const Background: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <Box
      // bgImage="url('https://img.freepik.com/free-photo/futuristic-metaverse-empty-room-product-display-presentation-abstract-technology-scifi-with-neon-light-3d-background_56104-2314.jpg?semt=ais_hybrid&w=740&q=80')"
      bgImage={"/bg.png"}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="100vh"
    >
      {children}
    </Box>
  );
};

export default Background;
