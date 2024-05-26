import { Patient } from "@/interfaces/nurse/nurse.interface";
import { fetchAPI } from "@/utils/api";

export const createPatient = async (patient: Patient) => {
        const data = await fetchAPI<Patient>("/patient", "POST", patient);
        return data;

}