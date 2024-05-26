type PatientStatus = 'ACTIVE' | 'INACTIVE';

type BloodType = 
  | "A_POSITIVE"
  | "A_NEGATIVE"
  | "B_POSITIVE"
  | "B_NEGATIVE"
  | "AB_POSITIVE"
  | "AB_NEGATIVE"
  | "O_POSITIVE"
  | "O_NEGATIVE";

type Genre = "MALE" | "FEMALE";

  
  export interface Patient {
    nationalId: string;
    fullname: string;
    genre: Genre 
    birthDate: string;
    adress: string;
    phoneNumber: string;
    cellPhoneNumber: string;
    bloodType:  BloodType ;
    weight: number;
    height: number;
    status:  PatientStatus ; 
    allergies: string[];
    medicalRecord: string[];
    photo: string;
  }

  export interface Medicine{
    medicine: string;
    dose: number;
    lapse: number;
  }
  export interface Prescription{
    medicines: Medicine[];
  }
