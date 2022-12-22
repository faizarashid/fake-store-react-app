import {
  GET_PRODUCTS_SUCCESS,
  GET_CATEGORIES_SUCCESS,
} from "../action/ActionTypes";

const initialState = {
  categories: [],
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.products };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories };

    default:
      return state;
  }
};
export default productsReducer;
