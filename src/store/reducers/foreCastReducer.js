import {
  GET_FORECAST_START,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_ERROR,
  PUSH_FORECAST_HISTORY,
} from "../types";

const initialState = {
  data: null,
  history: [],
  loading: true,
  message: "",
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_FORECAST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.city,
      };
    }
    case GET_FORECAST_ERROR: {
      return {
        ...state,
        loading: false,
        data: null,
        message: action.payload.message,
      };
    }
    case PUSH_FORECAST_HISTORY: {
      return {
        ...state,
        loading: true,
        history: state.data
          ? [...state.history, state.data]
          : [...state.history],
      };
    }
    default:
      return state;
  }
};

export default forecastReducer;
