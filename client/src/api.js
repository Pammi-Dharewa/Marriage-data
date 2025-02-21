import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://d66d-117-217-223-225.ngrok-free.app",
  headers:{
    "Content-Type": "application/json",
    USER_ID: "6b89d0b7-6449-4bf6-a403-ce8f8a50c749",
    "ngrok-skip-browser-warning": "true",
  }
})