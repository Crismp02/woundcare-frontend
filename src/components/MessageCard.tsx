import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function MessageCard({
  name,
  message,
  img,
  owner,
}: {
  name: string;
  message: string;
  img: string;
  owner: boolean;
}) {
  return (
    <Flex
      gap={4}
      justifyContent={"flex-end"}
      flexDirection={owner ? "row" : "row-reverse"}
    >
      <Box
        backgroundColor={owner ? "#AD8EB1" : "#ffffff"}
        display={"flex"}
        alignItems={"center"}
        padding={2}
        borderRadius={10}
        maxWidth={"75%"}
        wordBreak={"break-word"}
      >
        <Text>
          <strong>{name}: </strong>
          {message}
        </Text>
      </Box>
      <Box
        width={12}
        height={12}
        borderRadius={100}
        border={"#4F1964 solid 2px"}
        alignSelf={"flex-end"}
      >
        <img src={img} alt="imagen" />
      </Box>
    </Flex>
  );
}

export default MessageCard;
