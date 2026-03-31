import { ADD_MASSEGE, SHOW_MASSEGE } from "../constants/constant.js";

const initialMassege = {
  name: "",
  email: "",
  massege: "",
  request: false,
  showMassege: false,
};

export const massegeReducer = (state = initialMassege, action) => {
  switch (action.type) {
    case ADD_MASSEGE:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        massege: action.payload.massege,
        request: true,
      };

    case SHOW_MASSEGE:
      return {
        ...state,
        showMassege: !state.showMassege,
      };

    default:
      return state;
  }
};
