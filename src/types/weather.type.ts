export interface LocationWeather {
  [key: string]: WeatherData;
}
export interface WeatherData {
  temperature: string;
  cloud_status: string;
  phrase: string;
  temperature_max: string;
  temperature_min: string;
}
