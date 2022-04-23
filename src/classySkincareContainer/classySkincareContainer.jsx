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
                [e.target.productName] : e.target.value,
                [e.target.image] : e.target.value,
                [e.target.brand] : e.target.value,
                [e.target.benefits] : e.target.value


            }
        })
    }

    async createNewProduct(e){
        e.preventDefault();

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
            <NewSkincareComponent handleNewProductInputChange={this.handleNewProductInputChange}>                
            </NewSkincareComponent>
            {this.state.products.map((product)=>{
                return<SingleSkincareComponent product={product} key={`product-${product.id}`}>{JSON.stringify(product)}</SingleSkincareComponent>
            })}
        </div>
        )
    }
}

export default ClassySkincareContainer;