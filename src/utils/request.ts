import axios, { AxiosInstance } from "axios";
import { SERVER_RSS } from "../constraints/info";

const instance: AxiosInstance = axios.create({
  baseURL: SERVER_RSS,
  timeout: 60000,
});

export default instance;
