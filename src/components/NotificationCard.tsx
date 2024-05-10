"use client";
import { Notification } from "@/interfaces/notification/notification.interface";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import LinesEllipsis from "react-lines-ellipsis";
import Image from "next/image";
import Link from "next/link";

function NotificationCard({ notification }: { notification: Notification }) {
  const link = "/";
  const imageSrc = "/homePage/medicines.svg";

  function timeAgo(date: Date): string {
    const now = new Date();
    const secondsAgo = Math.round((now.getTime() - date.getTime()) / 1000);
    const minutesAgo = Math.round(secondsAgo / 60);
    const hoursAgo = Math.round(minutesAgo / 60);
    const daysAgo = Math.round(hoursAgo / 24);

    if (daysAgo > 0) {
      return `Hace ${daysAgo} día${daysAgo > 1 ? "s" : ""}`;
    } else if (hoursAgo > 0) {
      return `Hace ${hoursAgo} hora${hoursAgo > 1 ? "s" : ""}`;
    } else if (minutesAgo > 0) {
      return `Hace ${minutesAgo} minuto${minutesAgo > 1 ? "s" : ""}`;
    } else {
      return `Hace ${secondsAgo} segundo${secondsAgo > 1 ? "s" : ""}`;
    }
  }

  return (
    <Link style={{ height: 70, width: "100%" }} href={link}>
      <Card
        height={"100%"}
        width={"100%"}
        _hover={{
          boxShadow: "0 0 10px 2px #4F1964",
          transition: "box-shadow 0.3s",
        }}
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent={"space-between"}
        paddingX={2}
        paddingY={2}
      >
        <CardHeader
          height={"40px"}
          width={"40px"}
          position={"relative"}
          backgroundColor={"#AD8EB1"}
          borderRadius={100}
        >
          <Image
            src={imageSrc}
            alt="Notification image"
            layout="fill"
            objectFit="contain"
          ></Image>
        </CardHeader>
        <CardBody
          flex={3}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          paddingY={0}
          width={"100%"}
        >
          <Heading as={"h3"} fontSize={16}>
            {notification.type}
          </Heading>
          <LinesEllipsis
            text={notification.message}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            style={{
              fontSize: "11px",
              color: "#3B3B3B",
              width: "100%",
            }}
          />
        </CardBody>
        <CardFooter
          flex={1}
          height={"100%"}
          padding={0}
          fontSize={9}
          color={"#8E8E8E"}
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
        >
          {timeAgo(notification.date)}
        </CardFooter>
      </Card>
    </Link>
  );
}

export default NotificationCard;
