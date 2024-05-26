"use client";
import Arrow from "@/components/Arrow";
import Chat from "@/components/medical-chat/Chat";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

function MedicalChat() {
  const [message, setMessage] = useState("");

  return (
    <Box
      as="main"
      display={"flex"}
      flexDirection={"column"}
      paddingBottom={6}
      flexGrow={1}
    >
      <Arrow />
      <Flex as="section" flexDirection={"column"} paddingX={6} flexGrow={1}>
        <Flex
          marginTop={-20}
          marginRight={6}
          flexDirection="column"
          alignItems="flex-end"
        >
          <Heading
            as="h1"
            color="#4F1964"
            borderBottom={"2px solid #AD8EB1"}
            paddingRight={2}
            paddingLeft={20}
          >
            Mensajes
          </Heading>
        </Flex>
        <Box flexGrow={1} paddingY={4}>
          <Chat />
        </Box>
        <Flex gap={4}>
          <Input
            placeholder="Escribe tu mensaje aquí"
            backgroundColor={"#E6E6E6"}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (message) setMessage("");
              }
            }}
          />
          <Box
            w={10}
            h={10}
            borderRadius="35px"
            bg="#AD8EB1"
            p={1}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            cursor={"pointer"}
            onClick={() => {
              if (message) setMessage("");
            }}
          >
            <Image src="/send.svg" alt="arrow" width={24} height={24} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default MedicalChat;
