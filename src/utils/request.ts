import axios, { AxiosInstance } from "axios";
import { RSS_FEED_URL } from "../constraints/info";

require("dotenv").config();
const instance: AxiosInstance = axios.create({
  baseURL: RSS_FEED_URL,
  timeout: 60000,
});

export default instance;
