
export type product={
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  }

  export type cartState = {cartItems: [ {products: {
    id: 0,
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  }, quantity: 0 }]}