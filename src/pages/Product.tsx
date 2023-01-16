import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest } from "../redux/action/ActionTypes";
import { addToCart } from "../redux/action/ActionTypes";
import { product as productType } from "../types/types";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.ProductReducer.products);
  const cartItems = useSelector((state: any) => {
    console.log(state);
    return state.CartReducer.cartItems;
  });
  //Check whether the product is in the cart or not
  const isInCart = (product: productType) => {
    return !!cartItems.find((item: productType) => item.id === product.id);
  };

  useEffect(() => {
    console.log(getProductsRequest());
    dispatch(getProductsRequest());
  }, []);
  return (
    <>
      {products?.map((item: any) => (
        <Box
          key={item.id}
          sx={{
            maxWidth: 400,
            flexGrow: 1,
            display: "inline-block",
            marginLeft: 10,
            marginRight: 5,
          }}
        >
          <Card style={{ maxWidth: 400, display: "inline" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image={`${item.image}`}
            />
            <CardContent style={{ maxWidth: 400, display: "inline" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography> */}
              <Typography variant="body2" color="text.secondary">
                ${item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
              <Button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
      ;
    </>
  );
};
export default Product;
