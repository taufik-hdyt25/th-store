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
      color={pathName === path ? "myColor.bg" : "myColor.text"}
      rounded={"lg"}
      _hover={{
        bg: "#3587FF",
        color: "white",
        rounded: "lg",
      }}
    >
      {icon}
      {isOpen && <Text>{name}</Text>}
    </Flex>
  );
};

export default NavItem;
