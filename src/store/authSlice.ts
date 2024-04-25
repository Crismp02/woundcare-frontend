import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  authState: boolean;
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
    login: (state, action: PayloadAction<IAuthState>) => {
      state.authState = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
  },
});

export const { login } = authSlice.actions;
export const authReducer = authSlice.reducer;
