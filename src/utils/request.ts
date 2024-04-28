import axios, {AxiosInstance} from "axios";

require('dotenv').config()
const instance: AxiosInstance = axios.create({
    baseURL: process.env.RSS_FEED_URL,
    timeout: 60000,
})

export default instance;