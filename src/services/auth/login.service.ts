import { LoginResponse } from "@/interfaces/auth/login.interface";
import { BASE_URL } from "@/utils/variables";

export const login = async (
  nationalId: string,
  password: string
): Promise<LoginResponse> => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nationalId, password }),
  });

  if (!response.ok) {
    throw {
      status: response.status,
    };
  }

  const data = await response.json();

  return data;
};
