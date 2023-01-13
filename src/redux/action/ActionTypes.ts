export const ADD_TO_CART = "ADD_TO_CART";
export const GET_ALL_CART = "GET_ALL_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const CHECKOUT = "CHECKOUT";
export const CLEAR = "CLEAR";
export const GET_PRODUCTS_FETCH = "GET_PRODUCTS_FETCH";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const getProductsRequest = () => ({
  type: GET_PRODUCTS_FETCH,
});
export const getAllCart = (user: Number) => ({
  type: GET_ALL_CART,
  payload: {
    user,
  },
});
export const addToCart = (product: any) => ({
  type: ADD_TO_CART,
  payload: {
    product,
  },
});
export const loginUserAction = (user: {
  username: string;
  password: string;
}) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      user,
    },
  };
};
