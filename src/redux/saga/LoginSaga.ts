import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER_SUCCESS } from "../action/ActionTypes";

// const navigate = useNavigate();
function* loginSaga(payload) {
  const token = payload
    ? yield call(loginUserService, payload.payload.user)
    : "";
  yield put({ type: LOGIN_USER_SUCCESS, token });
  console.log(token);
}
const loginUserService = async (payload) => {
  console.log("Message: Inside login userService");
  const result = await axios("https://fakestoreapi.com/auth/login", {
    method: "POST",
    data: payload,
  });
  localStorage.setItem("userToken", result.data.token);
  //   navigate("/");

  return result.data.token;
};
function* getLogin() {
  yield takeEvery(LOGIN_USER_SUCCESS, loginSaga);
}
export default getLogin;
