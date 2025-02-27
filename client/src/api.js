import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://87b4-212-102-51-246.ngrok-free.app",
  headers:{
    "Content-Type": "application/json",
    USER_ID: "ebf2e5b3-94a9-4ba1-8186-0e2c563a2a95",
    "ngrok-skip-browser-warning": "true",
  }
})