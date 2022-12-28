import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import propTypes from "prop-types";
import background from "../../assets/wallpaper.png";
import ProductDetails from "../../pages/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest } from "../../redux/action/ActionTypes";
const ProductSlider = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    console.log(state);
    return state.ProductReducer.products;
  });
  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);
  const Item = (props) => {
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
          }}
        >
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
  // Item.defaultProps = {
  //   image: "propTypes.string",
  //   title: "propTypes.string",
  //   price: ":",
  // };
  return (
    <>
      {/* <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            marginTop: "10%",
            marginLeft: "50%",
            // backgroundImage: `url(${background})`,
          }}
        >
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Carousel style={{ alignContent: "center" }}>
              {products?.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </Box>
        </div>
      </div> */}
      <div className="card" style={{ display: "flex" }}>
        {products?.map((item) => (
          <ProductDetails key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};
export default ProductSlider;
