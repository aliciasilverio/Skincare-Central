import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import SingleSkincareComponent from './singleSkincareComponent/singleSkincareComponent';

const SkincareContainer = () => {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
            const getProductsApiResponse = await fetch("http://localhost:8000/api/contacts")
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