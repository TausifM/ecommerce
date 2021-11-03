import axios from "axios";
// current environment

export const app = axios.create({
  baseURL: "https://smbfurniture.in/api/", // production
});
