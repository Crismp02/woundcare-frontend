import { ConversationListItem } from "@/interfaces/chat/conversation.interface";
import { PaginatedResponse } from "@/interfaces/common/responses.interface";
import {
  Doctor,
  MedicalFile,
  Nurse,
  Patient,
} from "@/interfaces/nurse/nurse.interface";
import { ThePatient } from "@/interfaces/patient/patient.interface";
import { fetchAPI } from "@/utils/api";

export const createPatient = async (patient: Patient) => {
  const data = await fetchAPI<Patient>("/patient", "POST", patient);
  return data;
};
export const getPatient = async (nationalId: string) => {
  const data = await fetchAPI<ThePatient>(`/patient/${nationalId}`, "GET");
  return data;
};
export const getDoctors = async () => {
  const data = await fetchAPI<Doctor[]>("/doctor", "GET");
  return data;
};
export const getDoctor = async (nationalId: string) => {
  const data = await fetchAPI<Doctor>(`/doctor/${nationalId}`, "GET");
  return data;
};
export const getMe = async () => {
  const data = await fetchAPI<Nurse>("/nurse/me", "GET");
  return data;
};
export const createMedicalFile = async (medicalFile: MedicalFile) => {
  try {
    const data = await fetchAPI(`/medical-file`, "POST", medicalFile);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getPatientsConversations = async (
  page?: number,
  perPage?: number
) => {
  const data = await fetchAPI<PaginatedResponse<ConversationListItem>>(
    `/conversations/nurse/patient?${page ? `page=${page}&` : ""}${
      perPage ? `per-page=${perPage}` : ""
    }`,
    "GET"
  );
  return data;
};
export const getDoctorsConversations = async (
  page?: number,
  perPage?: number
) => {
  const data = await fetchAPI<PaginatedResponse<ConversationListItem>>(
    `/conversations/nurse/doctor?${page ? `page=${page}&` : ""}${
      perPage ? `per-page=${perPage}` : ""
    }`,
    "GET"
  );
  return data;
};
