import { Button } from "bootstrap";

const Cart = () => {
    // Extract the cart state from the context
    const { cartItems, checkout, clearCart } = useContext(CartContext);
  
    return (
      <>
        <div>
          <h1>
            Shopping Cart
            <span>({cartItems.length})</span>
          </h1>
        </div>
  
        {checkout && (
          <div>
            <h4>Thank you for your purchase!</h4>
            <Link to="/">
              <Button onClick={clearCart}>Continue Shopping</Button>
            </Link>
          </div>
        )}
  
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
                    {cartItems.map((product) => (
                      <CartItem key={product.id} product={product} />
                    ))}
                  </ul>
                )}
              </div>
            }
          </div>
  
          <div>
            {/* Checkout component  */}
            {cartItems.length > 0 && <Checkout />}
          </div>
        </div>
      </>
    );
  };
  export default Cart;
