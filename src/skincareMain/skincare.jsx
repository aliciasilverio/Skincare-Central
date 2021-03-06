import { useState } from "react";
import { Button } from 'react-bootstrap';
import { ReactDOM } from 'react';

import SingleSkincareComponent from "../classySkincare/singleSkincare/singleSkincare";
const SkincareContainer = () => {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
            const getProductsApiResponse = await fetch("https://polar-oasis-46988.herokuapp.com/api/contacts/")
            const parsedProducts = await getProductsApiResponse.json();
            setProducts(parsedProducts);
    }
    return(
        <div>
            <h1>Skincare Central</h1>
            <Button onClick={getProducts}>Get Skincare</Button>
            {products.map((product)=>{
                return<SingleSkincareComponent product={product} key={`product-${product.id}`}>{JSON.stringify(product)}</SingleSkincareComponent>
            })}
        </div>
    )
}


export default SkincareContainer;