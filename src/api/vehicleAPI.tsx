import axios from "axios";
import { URL_BACKEND_SERVER } from "../constants";
export const vehicleAPI = axios.create({
  baseURL: URL_BACKEND_SERVER,
});
