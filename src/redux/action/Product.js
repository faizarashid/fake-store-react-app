import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Product = () => {
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
  return (
    <>
      {products?.map((item) => (
        <Box key={item.id} sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Card sx={{ maxWidth: 345 }} display="inline">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={`${item.image}`}
            />
            <CardContent display="inline">
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