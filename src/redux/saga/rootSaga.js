import { takeEvery, all } from "redux-saga/effects";
import { GET_PRODUCTS_FETCH, ADD_TO_CART } from "../action/ActionTypes";
import GetAllProductsFetch from "./ProductSaga";
import GetAllCart from "./CartSaga";
function* watchAll() {
  yield all([
    takeEvery(GET_PRODUCTS_FETCH, GetAllProductsFetch),
    takeEvery(ADD_TO_CART, GetAllCart),
  ]);
}

export default watchAll;
