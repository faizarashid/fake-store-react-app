import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest } from "../../redux/action/ActionTypes";
import { product } from "../../types/types";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails";

const ProductSlider = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state: any) => {
    console.log(state);
    return state.ProductReducer.products;
  });
  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);
  const Item = (props: any) => {
    return (
      <Card>
        <CardMedia
          className="hero"
          component="img"
          alt="green iguana"
          height="10%"
          image={`${props.item.image}`}
        />
        <h2>{props.item.title}</h2>
        <p>${props.item.price}</p>
        <Button
          className="CheckButton"
          onClick={() => {
            console.log("clicked on item", props.item.title);
            navigate("/product", props);
          }}
        >
          <ProductDetails key={props.id} product={props} />
          Check it out!
        </Button>
      </Card>
    );
  };
  Item.propTypes = {
    item: propTypes.any,
    image: propTypes.string,
    title: propTypes.string,
    price: propTypes.string,
  };
  return (
    <>
      <div
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <h1
          style={{
            font: "fantasy",
            marginTop: "100px",
            marginLeft: "252px",
            position: "absolute",
            fontFamily: "fantasy",
          }}
        >
          Get Started
          <br />
          Buy you favourite Products Right Now!
        </h1>
        <div
          style={{
            marginTop: "10%",
            marginLeft: "50%",
          }}
        >
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Carousel>
              {products?.map((item: product, i: any) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </Box>
        </div>
      </div>
    </>
  );
};
export default ProductSlider;
