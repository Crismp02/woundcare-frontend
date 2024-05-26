"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import MessageCard from "../MessageCard";

function Chat() {
  return (
    <Flex flexDirection={"column"} gap={4}>
      <MessageCard
        img="/profile/user.png"
        message="Ando con un hueco en la entrepierna que me está volviendo verga compadre"
        name="José Vielma"
        owner={true}
      />
      <MessageCard
        img="/profile/user.png"
        message="Ando con un hueco en la entrepierna que me está volviendo verga compadre"
        name="José Vielma"
        owner={false}
      />
    </Flex>
  );
}

export default Chat;
