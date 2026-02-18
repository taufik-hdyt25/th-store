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

  const paths = path?.split("/").pop();
  const currentPaths = pathName.split("/")[2];

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
      bg={currentPaths === paths ? "#3587FF" : "transparent"}
      color={currentPaths === paths ? "white" : "black"}
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
          color={currentPaths === paths ? "white" : "black"}
        >
          {name}
        </Text>
      )}
    </Flex>
  );
};

export default NavItem;
