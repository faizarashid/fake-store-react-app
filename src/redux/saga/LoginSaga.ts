import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER_SUCCESS } from "../action/ActionTypes";

// const navigate = useNavigate();
function* loginSaga(payload) {
  const response = yield call(loginUserService, payload);
  yield put({ type: LOGIN_USER_SUCCESS, response });

  console.log(response);
}
const loginUserService = async (payload) => {
  const result = await axios("https://fakestoreapi.com/auth/login", {
    method: "POST",
    data: payload,
  });
  localStorage.setItem("userToken", result.data.token);
  //   navigate("/");

  return result.data;
};
function* getLogin() {
  yield takeEvery(LOGIN_USER_SUCCESS, loginSaga);
}
export default getLogin;
