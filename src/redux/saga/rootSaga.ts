import { takeEvery, all } from "redux-saga/effects";
import {
  GET_PRODUCTS_FETCH,
  ADD_TO_CART,
  LOGIN_USER_SUCCESS,
} from "../action/ActionTypes";
import GetAllProductsFetch from "./ProductSaga";
import fetchallCart from "./CartSaga";
import loginSaga from "./LoginSaga";
function* watchAll() {
  yield all([
    takeEvery(GET_PRODUCTS_FETCH, GetAllProductsFetch),
    takeEvery(ADD_TO_CART, fetchallCart),
    takeEvery(LOGIN_USER_SUCCESS, loginSaga),
  ]);
}

export default watchAll;
