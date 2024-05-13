import { Patient } from "@/interfaces/patient/patient.interface";
import { fetchAPI } from "@/utils/api";

export const getPatientMe = async () =>{
    const data = await fetchAPI<Patient>("/patient/28534712", "GET");
    return data;
};
