import { Nurse, Patient } from "@/interfaces/nurse/nurse.interface";
import { ThePatient } from "@/interfaces/patient/patient.interface";
import { fetchAPI } from "@/utils/api";

export const createPatient = async (patient: Patient) => {
        const data = await fetchAPI<Patient>("/patient", "POST", patient);
        return data;
}
export const getPatient = async (nationalId: string) => {
    const data = await fetchAPI<ThePatient>(`/patient/${nationalId}`, "GET");
    return data;
}

export const getMe = async () => {
    const data = await fetchAPI<Nurse>("/nurse/me", "GET");
    return data;
}