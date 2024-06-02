import { Role } from "../common/role.type";
import { Genre } from "../patient/patient.interface";

export interface Conversation {
  id: number;
  userId: string;
  user: {
    fullname: string;
    role: Role;
    patient: {
      genre: Genre;
    }[];
    doctor: {
      genre: Genre;
    }[];
  };
  nurseId: string;
  nurse: {
    genre: Genre;
    user: {
      fullname: string;
    };
  };
  medicalFileId: number;
}
