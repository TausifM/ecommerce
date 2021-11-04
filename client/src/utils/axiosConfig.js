import axios from "axios";
// current environment

export const app = axios.create({
  baseURL: "http://localhost:5000", // production
});
