import axios from "axios";

const URL_BASE = "https://api.openweathermap.org/data/2.5";
const APP_KEY = "852b9166267b9f1d0863e75ff52adb3f";

const axiosInstance = axios.create({
  baseURL: URL_BASE,
  mode: "cors",
});

export default {
  forecast: {
    fetch: (city) => axiosInstance.get(`/weather?q=${city}&appid=${APP_KEY}`),
  },
};
