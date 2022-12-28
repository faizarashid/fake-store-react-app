export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const CHECKOUT = "CHECKOUT";
export const CLEAR = "CLEAR";
export const GET_PRODUCTS_FETCH = "GET_PRODUCTS_FETCH";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";

export const getProductsRequest = () => ({
  type: GET_PRODUCTS_FETCH,
});
export const getAllCart = (product) => ({
  type: ADD_TO_CART,
  payload: {
    product,
  },
});
