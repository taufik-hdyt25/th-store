"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
} from "@chakra-ui/react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Logs,
  PackageSearch,
  Settings,
  Users,
} from "lucide-react";
import React, { JSX, ReactNode, useState } from "react";
import { Header } from "../Header";
import { NavItem } from "./Partials";

interface IProps {
  children: ReactNode;
}

const navItems = [
  { name: "Dashboard", icon: <LayoutDashboard /> },
  { name: "Order", icon: <Logs /> },
  { name: "Customer", icon: <Users /> },
  { name: "Product", icon: <PackageSearch /> },
  { name: "Setting", icon: <Settings /> },
];
const SideBar: React.FC<IProps> = ({ children }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box pos={"relative"}>
      <Grid
        templateColumns={{ base: "1fr", md: isOpen ? "260px 1fr" : "70px 1fr" }}
        transition="0.3s"
      >
        <GridItem
          shadow="lg"
          bg="myColor.bg-sidebar"
          minH="100vh"
          transition="0.3s"
          display={{ base: "none", md: "inline" }}
        >
          <Flex
            justify="space-between"
            align="center"
            px={5}
            mt={5}
            pos={"relative"}
          >
            <HStack spacing={3}>
              <Image w={10} src="/logo.png" />
              {isOpen && (
                <Heading
                  className="syne-font"
                  fontWeight="bold"
                  fontSize="xl"
                  transition="0.3s"
                >
                  Store
                </Heading>
              )}
            </HStack>

            <IconButton
              pos={"absolute"}
              right={-4}
              aria-label="Toggle Sidebar"
              icon={
                isOpen ? (
                  <ChevronLeft style={{ color: "#3587FF" }} />
                ) : (
                  <ChevronRight style={{ color: "#3587FF" }} />
                )
              }
              size="sm"
              variant={"unstyled"}
              onClick={() => setIsOpen(!isOpen)}
            />
          </Flex>

          <Stack mt={10} spacing={2} px={3}>
            {navItems?.map((v, idx) => (
              <NavItem
                key={idx + v?.name}
                name={isOpen ? v?.name : ""}
                isOpen={isOpen}
                icon={v?.icon}
              />
            ))}
          </Stack>
        </GridItem>

        {/* Content */}
        <GridItem
          bg="myColor.bg-content"
          maxH="100vh"
          h="100vh"
          overflowY="auto"
          transition="0.3s"
        >
          <Header />
          <Box p={5}>{children}</Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SideBar;
