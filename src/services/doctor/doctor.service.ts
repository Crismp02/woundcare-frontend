import { Doctor } from "@/interfaces/nurse/nurse.interface";
import { fetchAPI } from "@/utils/api";

export const getMe = async () => {
  const data = await fetchAPI<Doctor>("/doctor/me", "GET");
  return data;
};
