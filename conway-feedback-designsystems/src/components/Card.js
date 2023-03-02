import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function socialProfileWithImageHorizontal(props) {
  return (
    <Center py={6} bg={"gray.600"}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={props.user.photo} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"} color={"white"}>
            {props.user.name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {props.user.insta}
          </Text>
          <Text textAlign={"center"} color={("gray.700", "gray.400")} px={3}>
            {props.user.description}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            {props.user.tags.map((tag) => {
              return (
                <Badge
                  px={2}
                  py={1}
                  bg={("gray.50", "gray.800")}
                  fontWeight={"400"}
                  color={"gray.200"}
                >
                  {tag}
                </Badge>
              );
            })}
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              bg={"gray.400"}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Follow
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
