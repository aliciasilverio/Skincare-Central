import { useState, useEffect } from "react";
// import { Button } from 'react-bootstrap';
import React from "react";
import SingleSkincareComponent from "./singleSkincareComponent/singleSkincareContainer";
import NewSkincareComponent from "./newSkincareContainer/newSkincareContainer";

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
    handleNewProductInputChange = (e) => {
        console.log(this)
        console.log(e.target.value)
        this.setState({
            newProduct: {
                ...this.state.newProduct,
                [e.target.name] : e.target.value,
            }
        })
    }

    createNewProduct = async (e) => {
        e.preventDefault();
        const apiResponse = await fetch("http://localhost:8000/api/contacts", {
            method: "POST",
            body: JSON.stringify(this.state.newProduct),
            headers: {
                'Content-Type': "application/json"
            }
        })
        const creationResponseParsed = await apiResponse.json()
        this.setState({
            products: [...this.state.products, creationResponseParsed]
        })
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
            <NewSkincareComponent 
            createNewProduct = {this.createNewProduct}
            handleNewProductInputChange={this.handleNewProductInputChange}>                
            </NewSkincareComponent>
            {this.state.products.map((product)=>{
                return<SingleSkincareComponent product={product} key={`product-${product.id}`}>{JSON.stringify(product)}</SingleSkincareComponent>
            })}
        </div>
        )
    }
}

export default ClassySkincareContainer;