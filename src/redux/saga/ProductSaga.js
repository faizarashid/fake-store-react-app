import axios from "axios";
import {
  GET_PRODUCTS_FETCH,
  GET_PRODUCTS_SUCCESS,
} from "../action/ActionTypes";
import { takeEvery, call, put } from "redux-saga/effects";

const fetchallProducts = async () => {
  try {
    const product = await axios.get(`https://fakestoreapi.com/products`);

    return product.data;
  } catch (err) {
    return console.log(err);
  }
};
function* GetAllProductsFetch() {
  const products = yield call(fetchallProducts);
  yield put({ type: GET_PRODUCTS_SUCCESS, products });
  console.log(products);
}
function* getAllProducts() {
  yield takeEvery(GET_PRODUCTS_FETCH, GetAllProductsFetch);
}

export default getAllProducts;
