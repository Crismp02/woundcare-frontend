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
import { socket } from "@/socket";
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
  const [conversation, setConversation] = useState<Conversation>({
    id: 1,
    userId: "28534711",
    user: {
      fullname: "John Doe",
      role: RoleEnum.PATIENT,
      patient: [
        {
          genre: GenreEnum.MALE,
        },
      ],
      doctor: [],
    },
    nurseId: "nurse456",
    nurse: {
      genre: GenreEnum.FEMALE,
      user: {
        fullname: "Jane Smith",
      },
    },
    medicalFileId: 789,
  } as Conversation);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      conversationId: conversation.id,
      userId: conversation.userId,
      text: "Hello, how are you?",
      image: null,
      createdAt: new Date(),
      owner: true,
    },
    {
      id: 2,
      conversationId: conversation.id,
      userId: conversation.nurseId,
      text: "I am fine, thank you!",
      image: null,
      createdAt: new Date(),
      owner: false,
    },
    {
      id: 3,
      conversationId: conversation.id,
      userId: conversation.userId,
      text: "AYUDAAAA",
      image: null,
      createdAt: new Date(),
      owner: true,
    },
  ]);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

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

  const addMessage = (data: any) => {
    console.log(data)
    setMessages((prevMessages) => {
      if (prevMessages.some((message) => message.id === data.incremental))
        return prevMessages;
      return [
        ...prevMessages,
        {
          text: data.message.text,
          conversationId: 1,
          createdAt: new Date(),
          id: data.incremental,
          owner: true,
          userId: "28534711",
          image: null,
        },
      ];
    });
    goDown()
  };

  const sendMessage = () => {
    socket.emit("send-message", {
      text: message,
      conversationId: conversation.id,
    });
    setMessage("");
  };

  useEffect(() => {
    fetchConversation();
    socket.on("connect", () => {
      console.log("Conectado");
    });
    socket.on("disconnect", () => {
      console.log("Desconectado");
    });
    socket.on("on-message", (data) => {
      console.log(data);
      console.log(messages);
      addMessage(data);
    });
    /*
    socket.on("messages", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    })*/

    return () => {
      socket.off("connect", () => {
        console.log("Cleaning");
      });
      socket.off("disconnect", () => {
        console.log("Cleaning");
      });
      //socket.off("messages")
    };
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

  const goDown = () => {
    const chatBox = chatBoxRef.current;
    if (chatBox) {
      const isAtBottom =
        chatBox.scrollHeight - chatBox.scrollTop === chatBox.clientHeight;
      if (isAtBottom) {
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    }
  }

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
          {
            /*!(totalMessages === messages.length)*/ false && (
              <Box ref={ref} display={"flex"} justifyContent={"center"}>
                <PaginationLoader />
              </Box>
            )
          }
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
                if (message) sendMessage();
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
              if (message) sendMessage();
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
