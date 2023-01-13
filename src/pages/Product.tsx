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

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.ProductReducer.products);

  useEffect(() => {
    console.log(getProductsRequest());
    dispatch(getProductsRequest());
  }, []);
  return (
    <>
      {products?.map((item: any) => (
        <Box key={item.id} sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Card style={{ maxWidth: 345, display: "inline" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={`${item.image}`}
            />
            <CardContent style={{ maxWidth: 345, display: "inline" }}>
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
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      ))}
      ;
    </>
  );
};
export default Product;
