import { useState, useEffect } from "react";
// import { Button } from 'react-bootstrap';
import React from "react";
import SingleSkincareComponent from "./singleSkincareComponent/singleSkincareComponent";


class ClassySkincareContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            products: [],
            newProduct: {
                productName: "",
                image: "",
                brand: "",
                price: null,
                benefits: ""
            }
        }
    }
    handleNewProductInputChange(e){
        console.log(this)
    }
    async getProducts(){
        const getProductsApiResponse = await fetch("http://localhost:8000/api/contacts")
        const parsedProducts = await getProductsApiResponse.json();
        this.setState({
            products: parsedProducts
        })      
}
    componentDidMount(){
        this.getProducts()
            
    }
    render(){
        return(
            <div>
            <h1>Skincare Central</h1>
            {this.state.products.map((product)=>{
                return<SingleSkincareComponent product={product} key={`product-${product.id}`}>{JSON.stringify(product)}</SingleSkincareComponent>
            })}
        </div>
        )
    }
}

export default ClassySkincareContainer;