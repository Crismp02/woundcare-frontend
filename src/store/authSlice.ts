import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  authState: boolean;
  token: string;
  role: string;
}

export interface IAuthPayload {
  token: string;
  role: string;
}

const initialState: IAuthState = {
  authState: false,
  token: "",
  role: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IAuthPayload>) => {
      state.authState = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.authState = false;
      state.token = "";
      state.role = "";
    },
  },
});

export const { login } = authSlice.actions;
export const authReducer = authSlice.reducer;
