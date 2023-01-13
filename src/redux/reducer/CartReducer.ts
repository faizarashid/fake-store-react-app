import { REMOVE_ITEM, ADD_TO_CART } from "../action/ActionTypes";
import { product, cartState } from "../../types/types";

const initialState = {
  cartItems: [{}],
};
export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};
const Storage = (cartItems) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item: any) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter(
            (item: any) => item.id !== action.payload.id
          ),
        ],
      };
    case ADD_TO_CART:
      if (!state.cartItems.find((item: any) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    default:
      return state;
  }
};
export default CartReducer;
