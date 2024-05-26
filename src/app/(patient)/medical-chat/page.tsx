"use client";
import Arrow from "@/components/Arrow";
import Loader from "@/components/Loader";
import Chat from "@/components/medical-chat/Chat";
import PaginationLoader from "@/components/PaginationLoader";
import { Conversation } from "@/interfaces/chat/conversation.interface";
import { Message } from "@/interfaces/chat/messages.interface";
import { GenreEnum, RoleEnum } from "@/interfaces/common/role.type";
import { getMyConversation } from "@/services/patient/conversation.service";
import { getMessages } from "@/services/patient/messages.service";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";

function MedicalChat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [totalMessages, setTotalMessages] = useState(0);
  const [conversation, setConversation] = useState<Conversation>(
    {} as Conversation
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const fetchConversation = async () => {
    try {
      const conversation = await getMyConversation();
      setConversation(conversation);
    } catch (error: any) {
      if (error.status === 404) {
        toast.error("Usted no posee una conversación activa");
      } else {
        toast.error("Ha ocurrido un error al cargar la conversación");
      }
    }
  };

  const fetchMessages = async () => {
    try {
      const newMessages = await getMessages(page, 10);
      setMessages([...messages, ...newMessages.items]);
      if (page === 1) setTotalMessages(newMessages.meta.totalItems);
      setPage(page + 1);
    } catch (error) {
      toast.error("Ha ocurrido un error al cargar los mensajes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConversation();
  }, []);

  useEffect(() => {
    if (inView || page === 1) fetchMessages();
  }, [inView]);

  useEffect(() => {
    const chatBox = chatBoxRef.current;
    if (chatBox) {
      const isAtBottom =
        chatBox.scrollHeight - chatBox.scrollTop === chatBox.clientHeight;
      if (isAtBottom) {
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    }
  }, [messages]);

  return loading ? (
    <Box width={"100vw"} flexGrow={1} position={"relative"}>
      <Loader />
    </Box>
  ) : (
    <Box
      as="main"
      display={"flex"}
      flexDirection={"column"}
      paddingBottom={6}
      maxHeight={"100vh"}
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
        <Box
          ref={chatBoxRef}
          flexGrow={1}
          maxHeight={"70vh"}
          paddingY={4}
          marginY={4}
          overflowY={"scroll"}
        >
          {!(totalMessages === messages.length) && (
            <Box ref={ref} display={"flex"} justifyContent={"center"}>
              <PaginationLoader />
            </Box>
          )}
          <Chat conversation={conversation} messages={messages} />
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
