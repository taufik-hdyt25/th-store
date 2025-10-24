"use client";

import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Bell, ChevronDown, Mail, Search } from "lucide-react";
import React, { JSX, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Header: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <Box bg={"white"} py={5} px={{ base: 5, md: 10 }} shadow={"sm"}>
      <HStack justify={"space-between"}>
        <Box display={{ base: "inline", md: "none" }}>
          <Search style={{ color: "#ABABAB" }} />
        </Box>

        <InputGroup w={"400px"} display={{ base: "none", md: "inline" }}>
          <InputLeftElement pointerEvents="none" pl={3}>
            <Search style={{ color: "#ABABAB" }} />
          </InputLeftElement>
          <Input rounded={"full"} type="tel" placeholder="Search..." />
        </InputGroup>

        <HStack spacing={5}>
          <Mail style={{ color: "var(--text)" }} />
          <Bell style={{ color: "var(--text)" }} />
          <Flex align={"center"} gap={3}>
            <Avatar
              size={{ base: "sm", md: "md" }}
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Stack spacing={0}>
              <Text>Taufik</Text>
              <Text fontSize={"xs"} color={"#ABABAB"}>
                taufik@gmail.com
              </Text>
            </Stack>
            <Menu>
              <MenuButton>
                <ChevronDown />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
