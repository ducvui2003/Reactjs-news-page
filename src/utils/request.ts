import axios, { AxiosInstance } from 'axios';
import { SERVER_RSS } from '../constraints/info';
import NProgress from 'nprogress';

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
});

const instance: AxiosInstance = axios.create({
  baseURL: SERVER_RSS,
  timeout: 20000,
});
// Thêm một bộ đón chặn request
instance.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    NProgress.start();
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  },
);

// Thêm một bộ đón chặn response
instance.interceptors.response.use(
  function (response) {
    NProgress.done();
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response;
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  },
);
export default instance;
