import {
  GET_FORECAST_START,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_ERROR,
  PUSH_FORECAST_HISTORY,
} from "./types";
import Api from "./../services/Services";
import weatherIcons from "../assets/fonts/icons.json";

export const getForecastStart = () => ({
  type: GET_FORECAST_START,
});

export const getForecastSuccess = (city) => ({
  type: GET_FORECAST_SUCCESS,
  payload: {
    city,
  },
});

export const getForecastError = (message) => ({
  type: GET_FORECAST_ERROR,
  payload: {
    message,
  },
});

export const pushForecastHistory = () => ({
  type: PUSH_FORECAST_HISTORY,
});

export const getForecast = (city) => async (dispatch) => {
  dispatch(getForecastStart());
  try {
    const { data, status, statusText } = await Api.forecast.fetch(city);
    if (status === 200) {
      const prefix = "wi wi-";
      let code = data.weather[0].id;
      let icon = weatherIcons[code].icon;
      // If we are not in the ranges mentioned above, add a day/night prefix.
      if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = "day-" + icon;
      }
      // Finally tack on the prefix.
      icon = prefix + icon;
      dispatch(getForecastSuccess({ ...data, icon }));
    } else {
      dispatch(getForecastError(statusText));
    }
  } catch (error) {
    dispatch(getForecastError("Something went wrong, please try again."));
  }
};
