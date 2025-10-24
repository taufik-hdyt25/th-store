import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  name: string;
  icon?: ReactNode;
  isOpen?: boolean;
}
const NavItem: React.FC<IProps> = ({ name, icon, isOpen }) => {
  return (
    <Flex
      align={"center"}
      gap={3}
      p={3}
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
