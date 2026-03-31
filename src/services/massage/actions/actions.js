import { ADD_MASSEGE, SHOW_MASSEGE } from "../constants/constant.js";

export const addMassege = (data) => {
  return {
    type: ADD_MASSEGE,
    payload: data,
  };
};

export const toggleShowMassege = () => {
  return {
    type: SHOW_MASSEGE,
  };
};
