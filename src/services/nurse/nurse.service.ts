import { PaginatedResponse } from "@/interfaces/common/responses.interface";
import {
  BandageChange,
  Doctor,
  MedicalFile,
  Nurse,
  Patient,
  Patients,
  TheDoctor,
  TheMedicalFile,
  ThePatientInfo
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
    const data = await fetchAPI(`/medical-file`, "POST", medicalFile);
    return data;
};
export const getPatients = async (page?: number, perPage?: number): Promise<PaginatedResponse<Patients>> => {
  const data = await fetchAPI<PaginatedResponse<Patients>>(`/patient/nurse?${page ? `page=${page}&` : ""}${
    perPage ? `per-page=${perPage}` : ""
  }`,
  "GET");
  return data;
};
export const getPatientMedicalFile = async (nationalId: string) => {
  const data = await fetchAPI<TheMedicalFile>(`/medical-file/patient/${nationalId}`, "GET");
  return data;
};
export const getPatientInfo = async (nationalId: string) => {
  const data = await fetchAPI<ThePatientInfo>(`/patient/${nationalId}`, "GET");
  return data;
};
export const createDoctor = async (doctor: TheDoctor) => {
  const data = await fetchAPI<TheDoctor>("/doctor", "POST", doctor);
  return data;
};
export const createBandageChange = async (bandageChange: BandageChange) => {
    const data = await fetchAPI(`/bandage-change`, "POST", bandageChange);
    return data;
}