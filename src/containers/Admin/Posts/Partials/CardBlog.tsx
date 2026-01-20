import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Calendar, Eye, Pen, Trash } from "lucide-react";

const CardBlog = () => {
  return (
    <Flex
      px={5}
      py={5}
      border={"2px solid #eaeaea"}
      rounded={"md"}
      w={"full"}
      justify={"space-between"}
      align={"center"}
      shadow={"sm"}
    >
      <Box>
        <Heading fontSize={"md"}>Pentingnya Pembersihan Gigi Teratur</Heading>
        <Text color={"gray"} fontSize={"sm"} mt={1}>
          Pembersihan gigi yang teratur dapat mencegah berbagai penyakit gigi
          dan gusi.
        </Text>
        <HStack mt={1}>
          <Calendar size={18} />
          <Text color={"gray"} fontSize={"sm"}>
            15/1/2024
          </Text>
          <HStack>
            <Badge>Teknologi</Badge>
            <Badge colorScheme="green">Published</Badge>
          </HStack>
        </HStack>
      </Box>

      <HStack>
        <IconButton
          size={"sm"}
          aria-label="view"
          variant={"outline"}
          icon={<Eye size={16} color="var(--primary)" />}
        />
        <IconButton
          size={"sm"}
          aria-label="view"
          variant={"outline"}
          icon={<Pen size={16} color="var(--primary)" />}
        />
        <IconButton
          size={"sm"}
          aria-label="view"
          variant={"outline"}
          icon={<Trash size={16} color="red" />}
        />
      </HStack>
    </Flex>
  );
};

export default CardBlog;
