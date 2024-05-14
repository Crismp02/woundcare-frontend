"use client";
import { readAllNotifications } from "@/services/notifications/notifications.service";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

function Notification() {
  const readAll = async () => {
    try {
      await readAllNotifications();
    } catch (error) {
      toast.error("Ha ocurrido un error");
    }
  };
  return (
    <Box as="main">
      <Box
        w="18vh"
        h="18vh"
        bg="#AD8EB1"
        pt="2vh"
        pl="2vh"
        sx={{ clipPath: "circle(66.4% at 1% 1%)" }}
      >
        <Box
          w="5vh"
          h="5vh"
          borderRadius="35px"
          bg="white"
          p="5px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          justifyContent="center"
        >
          <Image
            src="/arrow.png"
            alt="arrow"
            width={36}
            height={36}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
      <Flex
        marginTop={-16}
        marginRight={6}
        flexDirection="column"
        alignItems="flex-end"
      >
        <Heading
          as="h1"
          color="#4F1964"
          borderBottom={"2px solid #AD8EB1"}
          paddingX="10px"
        >
          Notificaciones
        </Heading>
      </Flex>
      <Button
        fontWeight={500}
        fontSize={12}
        padding={0}
        backgroundColor="transparent"
        marginLeft={4}
        onClick={() => readAll()}
      >
        Marcar todo como leído
      </Button>
    </Box>
  );
}

export default Notification;
