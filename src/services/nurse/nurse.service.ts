import {
  Doctor,
  MedicalFile,
  Nurse,
  Patient,
  Patients,
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
  try {
    const data = await fetchAPI(`/medical-file`, "POST", medicalFile);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getPatients = async () => {
  const data = await fetchAPI<Patients[]>("/patient", "GET");
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
