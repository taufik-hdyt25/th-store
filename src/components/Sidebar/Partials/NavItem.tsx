import { Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface IProps {
  name: string;
  icon?: ReactNode;
  isOpen?: boolean;
  path?: string;
}
const NavItem: React.FC<IProps> = ({ name, icon, isOpen, path }) => {
  const pathName = usePathname();

  return (
    <Flex
      role="group"
      align={"center"}
      cursor={"pointer"}
      onClick={() => {
        if (path) {
          window.location.href = path;
        }
      }}
      gap={3}
      p={3}
      bg={pathName === path ? "#3587FF" : "transparent"}
      color={pathName === path ? "white" : "black"}
      rounded={"lg"}
      _hover={{
        bg: "#3587FF",
        rounded: "lg",
        color: "white",
      }}
    >
      {icon}
      {isOpen && (
        <Text
          _groupHover={{ color: "white" }}
          color={pathName === path ? "white" : "black"}
        >
          {name}
        </Text>
      )}
    </Flex>
  );
};

export default NavItem;
