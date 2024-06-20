import { LocationWeather } from '../types/weather.type';
import instance from '../utils/request';

// Lấy ra vị trí hiện tại
export const getLocation = async () => {
  return instance.get('/lookup').then((resp) => resp.data.data);
};

// Lấy ra danh sách thời tiết các tỉnh thành
export const getWeathers = async () => {
  return instance.get('/weather').then((resp): LocationWeather[] => {
    const weatherDetail = resp.data;
    const weather = Object.keys(resp.data);
    return weather.map((key) => {
      const {
        temperature,
        cloud_status,
        phrase,
        temperature_max,
        temperature_min,
      } = weatherDetail[key];
      return {
        [key]: {
          temperature,
          cloud_status,
          phrase,
          temperature_max,
          temperature_min,
        },
      };
    });
  });
};

export const getProvinceName = (locationWeather: LocationWeather): string => {
  return Object.keys(locationWeather)[0];
};
