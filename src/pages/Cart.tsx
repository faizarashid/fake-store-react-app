import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import ProductDetails from "./ProductDetails";
import { product as productType } from "../types/types";
const Cart = (cartItems:[]) => {
    // Extract the cart state from the context
  
    return (
      <>
        <div>
          <h1>
            Shopping Cart
            <span>({cartItems.length})</span>
          </h1>
        </div>
  
          <div>
            <h4>Thank you for your purchase!</h4>
            <Link to="/">
              <button >Continue Shopping</button>
            </Link>
          </div>  
        <div>
          <div>
            {
              <div>
                {/* If cart is empty, display message, and if not, display each cart
              Item in cart: {cartItems.length} */}
                {cartItems.length === 0 ? (
                  <h4 style={{}}>Cart is empty</h4>
                ) : (
                  <ul>
                    {cartItems.map((product:any) => (
                      <ProductDetails key={product.id} product={product} />
                    ))}
                  </ul>
                )}
              </div>
            }
          </div>

        </div>
      </>
    );
  };
  export default Cart;
