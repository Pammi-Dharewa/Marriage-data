import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://f38f-117-202-145-249.ngrok-free.app",
  headers:{
    "Content-Type": "application/json",
    USER_ID: "ebf2e5b3-94a9-4ba1-8186-0e2c563a2a95",
    "ngrok-skip-browser-warning": "true",
  }
})