import { LOGIN_USER_SUCCESS } from "../action/ActionTypes";

const initialState = {
  token: "",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
export default loginReducer;
