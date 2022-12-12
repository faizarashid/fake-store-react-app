import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


const ProductSlider = () => {
    const [products, setProducts] = useState([]);
    async function fetchallProducts() {
        const result = await (await fetch('https://fakestoreapi.com/products')).json()
        setProducts(result)
    }

    useEffect(() => {
        fetchallProducts()
    }, [])

    function Item(props) {
        return (

            <Card>
                <br />
                <br />
                <br />
                <br />
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={`${props.item.image}`}
                />
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Card>
        )
    }
    return (
        <>
            <Carousel>
                {
                    products?.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </>
    );

}
export default ProductSlider;