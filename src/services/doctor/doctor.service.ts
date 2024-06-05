import { ConversationListItem } from "@/interfaces/chat/conversation.interface";
import { PaginatedResponse } from "@/interfaces/common/responses.interface";
import { Doctor } from "@/interfaces/nurse/nurse.interface";
import { fetchAPI } from "@/utils/api";

export const getMe = async () => {
  const data = await fetchAPI<Doctor>("/doctor/me", "GET");
  return data;
};
export const getNursesConversations = async (
  page?: number,
  perPage?: number
) => {
  const data = await fetchAPI<PaginatedResponse<ConversationListItem>>(
    `/conversations/user/nurse?${page ? `page=${page}&` : ""}${
      perPage ? `per-page=${perPage}` : ""
    }`,
    "GET"
  );
  return data;
};
