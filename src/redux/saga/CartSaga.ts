import { ADD_TO_CART, GET_ALL_CART } from "../action/ActionTypes";
import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

function* GetAllCart() {
  const cart: any = yield call(fetchallCart);
  yield put({ type: ADD_TO_CART, cart });
  console.log(cart);
}
const fetchallCart = async () => {
  try {
    const cart = await axios.get(`https://fakestoreapi.com/carts/1`);

    return cart.data;
  } catch (err) {
    return console.log(err);
  }
};
function* cartSaga() {
  yield takeEvery(GET_ALL_CART, GetAllCart);
  yield takeEvery(ADD_TO_CART, fetchallCart);
}

export default cartSaga;
