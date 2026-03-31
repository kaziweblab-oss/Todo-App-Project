import axios from "axios";
import {
  API_FAIL,
  API_REQUEST,
  API_SUCCESS,
  TOGGLE_TODO,
} from "../constants/constants.js";

export const apiRequest = () => {
  return {
    type: API_REQUEST,
  };
};

export const apiSucess = (data) => {
  return {
    type: API_SUCCESS,
    payload: data,
  };
};

export const apiFail = (errorMessage) => {
  return {
    type: API_FAIL,
    payload: errorMessage,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const fetchApi = (url) => {
  return (dispatch) => {
    dispatch(apiRequest());
    axios
      .get(url)
      .then((res) => {
        dispatch(apiSucess(res.data));
      })
      .catch((err) => {
        dispatch(apiFail(err.message));
      });
  };
};
