import { ReactNode } from "react";
import {
} from "react";
import Link from "next/link";
// const Links = ["Dashboard", "Projects", "Team"];
const Links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "My Todos",
        path: "/todos",
    },
    {
        name: "All Users",
        path: "/users/",
    },
    {
        name: "With MongoDB",
        path: "/with-mongo-db",
    },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
    <Box
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
    >
        <Link href={path}>{children}</Link>
    </Box>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        size={"md"}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box>Logo</Box>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            {Links.map(({ name, path }) => (
                                <NavLink key={path} path={path}>
                                    {name}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Button
                            variant={"solid"}
                            colorScheme={"teal"}
                            size={"sm"}
                            mr={4}
                        >
                            Action
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                            >
                                <Avatar
                                    size={"sm"}
                                    src={
                                        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {Links.map(({ name, path }) => (
                                <NavLink key={path} path={path}>
                                    {name}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            {/* <Box p={4}>Main Content Here</Box> */}
        </>
    );
}