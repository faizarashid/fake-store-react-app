import { ADD_TO_CART } from "../action/ActionTypes";
import { takeEvery, call, put } from "redux-saga/effects";

function* GetAllCart() {
  const cart = [];
  yield put({ type: ADD_TO_CART, cart });
  console.log(cart);
}
function* cartSaga() {
  yield takeEvery(ADD_TO_CART, GetAllCart);
}

export default cartSaga;
