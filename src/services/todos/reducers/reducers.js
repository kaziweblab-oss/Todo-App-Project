import {
  API_FAIL,
  API_REQUEST,
  API_SUCCESS,
  TOGGLE_TODO,
} from "../constants/constants.js";

const initialState = {
  isLoading: false,
  error: null,
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
        error: null,
      };

    case API_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          return item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item;
        }),
      };

    default:
      return state;
  }
};
