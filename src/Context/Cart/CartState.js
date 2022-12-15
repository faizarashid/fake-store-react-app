import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { sumItems } from "./CartReducer";
import PropTypes from "prop-types";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
    checkout: false,
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  return (
    //Add the functions that have been defined above into the Context provider, and pass on to the children
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
CartState.propTypes = { children: PropTypes.element.isRequired };
export default CartState;
