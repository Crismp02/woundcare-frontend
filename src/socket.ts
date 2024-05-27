"use client";
import { Manager } from "socket.io-client";
import { BASE_URL } from "./utils/variables";

const manager = new Manager(`${BASE_URL}`, {
  reconnectionDelayMax: 10000,
});

export const socket = manager.socket("/", {
  auth: {
    token: JSON.parse(
      JSON.parse(localStorage.getItem("persist:auth") || "").token
    ),
  },
});
