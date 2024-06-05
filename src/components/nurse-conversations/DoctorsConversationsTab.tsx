"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ConversationsCard from "./ConversationsCard";
import { ConversationListItem } from "@/interfaces/chat/conversation.interface";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import PaginationLoader from "../PaginationLoader";
import { getDoctorsConversations } from "@/services/nurse/nurse.service";

function DoctorsConversationsTab() {
  const [conversationList, setConversationList] = useState<
    ConversationListItem[]
  >([]);
  const [page, setPage] = useState(1);
  const [totalConversations, setTotalConversations] = useState<number>(0);
  const { ref, inView } = useInView();

  const fetchConversations = async () => {
    try {
      const newConversations = await getDoctorsConversations(page, 10);
      setConversationList([...conversationList, ...newConversations.items]);
      if (page === 1) setTotalConversations(newConversations.meta.totalItems);
      setPage(page + 1);
    } catch (error) {
      toast.error("Ha ocurrido un error inesperado");
    }
  };

  useEffect(() => {
    if (inView || page === 1) fetchConversations();
  }, [inView]);
  return (
    <Box as="section" maxHeight={"60vh"} overflow={"scroll"}>
      {conversationList.map((conversation) => (
        <ConversationsCard
          key={conversation.id}
          date={conversation.lastMessageDate}
          message={conversation.lastMessageText}
          name={conversation.user.fullname}
          link={`/medical-conversation/${conversation.id}`}
        />
      ))}
      {!(totalConversations === conversationList.length) && (
        <Box
          ref={ref}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          marginY={4}
        >
          <PaginationLoader />
        </Box>
      )}
      {!(conversationList.length > 0) && (
        <Text textColor={"white"}>No hay notificaciones</Text>
      )}
    </Box>
  );
}

export default DoctorsConversationsTab;
