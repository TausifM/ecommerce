import axios from "axios";
const env = process.env.NODE_ENV; // current environment

export const app = axios.create({
  baseURL:
    env === "production"
      ? "https://smbfurniture.in/api/v1" // production
      : "http://localhost:5000/api/v1", // development
});
