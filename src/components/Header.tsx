import { Box, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { NavLinkTypes } from "src/types";

export default function Header() {
  const navLinks: NavLinkTypes[] = [
    { id: 1, href: "/add-items", linkName: "Add Products" },
  ];
  return (
    <Box as="nav">
      <Box bg="gray.100" p="20px">
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">RandoStore</Link>
          <HStack spacing={"20px"}>
            {navLinks.map(({ id, href, linkName }) => {
              return (
                <Link href={href} key={id}>
                  <a _hover={{ bg: "teal.600" }}>{linkName}</a>
                </Link>
              );
            })}
          </HStack>
          <Box>
            <FaShoppingCart fontSize={"28px"} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
