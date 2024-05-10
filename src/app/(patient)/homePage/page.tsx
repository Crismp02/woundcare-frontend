"use client";
import MenuOptionCard from "@/components/MenuOptionCard";
import NotificationCard from "@/components/NotificationCard";
import { Notification } from "@/interfaces/notification/notification.interface";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function HomePage() {
  const notification: Notification = {
    id: 1,
    message:
      "Es hora de cambiar la venda, si no lo haces te vas a morir por favore mueve ese culo bobo o qu wtfd wtfd wtrf",
    date: new Date("2022-01-01T00:00:00.000Z"),
    userId: "user123",
    type: "BANDAGE_CHANGE",
    read: false,
  };

  return (
    <Box as="main" flexGrow={1} paddingY={10}>
      <Box
        as="article"
        height={"100%"}
        width={"100vw"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        paddingX={4}
        gap={4}
      >
        <Box
          as="section"
          width={"100%"}
          maxWidth={"350px"}
          height={"300px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={4}
          padding={4}
          backgroundColor={"rgba(97, 48, 116, 0.5)"}
          borderRadius={10}
        >
          <Heading
            as={"h2"}
            alignSelf={"flex-start"}
            fontSize={20}
            color={"white"}
          >
            Notificaciones
          </Heading>
          <NotificationCard notification={notification} />
        </Box>
        <Box
          as="section"
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={4}
        >
          <MenuOptionCard
            imageSrc="/homePage/medicines.svg"
            src="/"
            title="Medicamentos"
          />
          <MenuOptionCard
            imageSrc="/homePage/daily-cares.svg"
            src="/"
            title="Cuidados diarios"
          />
          <MenuOptionCard
            imageSrc="/homePage/messages.svg"
            src="/"
            title="Mensajes"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
