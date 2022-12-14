import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  async function fetchallProducts() {
    const result = await (
      await fetch("https://fakestoreapi.com/products")
    ).json();
    setProducts(result);
  }

  useEffect(() => {
    fetchallProducts();
  }, []);

  function Item(props) {
    return (
      <Card>
        <CardMedia
          className="hero"
          component="img"
          alt="green iguana"
          height="140"
          image={`${props.item.image}`}
        />
        <h2>{props.item.title}</h2>
        <p>${props.item.price}</p>
        <Button className="CheckButton">Check it out!</Button>
      </Card>
    );
  }
  return (
    <>
      {/* <div
        className="card"
        style={{ width: "18rem", marginTop: "150px", alignContent: "center" }}
      > */}
      <div
        style={{
          marginTop: "10%",
          marginLeft: "45%"
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
    </>
  );
};
export default ProductSlider;
