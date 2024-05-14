import { PaginatedResponse } from "@/interfaces/common/responses.interface";
import { Notification } from "@/interfaces/notification/notification.interface";
import { fetchAPI } from "@/utils/api";

export const getMyNotifications = async (
  page?: number,
  perPage?: number
): Promise<PaginatedResponse<Notification>> => {
  const data = await fetchAPI<PaginatedResponse<Notification>>(
    `/notifications/me?${page ? `page=${page}&` : ""}${
      perPage ? `perPage=${perPage}` : ""
    }`,
    "GET"
  );
  return data;
};
