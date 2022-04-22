import { useState, useEffect } from "react";
import ProductComponent from "./Product/productComponent";
import NewProductComponent from "./NewProduct/newProductComponent";
import { Figure, Button } from 'react-bootstrap';
import React from "react";



class SkincareContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products: [],
            newProduct: {
                    productName: "",
                    image: "",
                    brand: "",
                    price: "",
                    benefits: ""  
                }
            }
            this.getProducts = this.getProducts.bind(this)        
        }



handleNewProductInputChange = (e) => {
    console.log(this)
    console.log(e.target.value, "e. target value")
    this.setState({
        newProduct: {
            ...this.state.newProduct,
            [e.target.name]: e.target.value
        }
    })
}



createNewProduct = async (e) => {
    console.log("Looking for console.log")
    console.log(this.state.newProduct);
    const apiResponse = await fetch("https://pacific-earth-58017.herokuapp.com//api/contacts", {
        method: "POST",
        body: JSON.stringify(this.state.newProduct),
        headers: {
            'Content-Type': "application/json"
        }
    })
    if (apiResponse.status === 201) {
        const creationResponseParsed = await apiResponse.json()
        console.log(creationResponseParsed)
        this.setState({
            products: [...this.state.products, creationResponseParsed]
        })
    }
}


async getProducts(e) {
    e.preventDefault()
    const getProductsApiResponse = await fetch("https://pacific-earth-58017.herokuapp.com/api/contacts")
    const parsedProducts = await getProductsApiResponse.json();
    console.log(parsedProducts);
    this.setState({
        products: parsedProducts
    })
}


deleteProduct = async (idToDelete) => {
    const deleteResponse = await fetch(`https://pacific-earth-58017.herokuapp.com/api/contacts/${idToDelete}`, {
        method: "DELETE"
    })
    if (deleteResponse.status === 204) {
        this.setState({
            products: this.state.products.filter(e => e.id !== idToDelete)
        })
    }
}

updateProduct = async (idToUpdate, productToUpdate) => {
    const updateResponse = await fetch(`https://pacific-earth-58017.herokuapp.com/api/contacts/${idToUpdate}`, {
        method: "PUT",
        body: JSON.stringify(productToUpdate),
        headers: {
            'Content-Type': "application/json"
        }
})

if (updateResponse.status === 200) {
    console.log(updateResponse.status)
    const parsedProducts = await updateResponse.json();
        this.setState({
            products: this.state.products.map(e => e.id === idToUpdate ? parsedProducts: e)
        })
    }
}

    functionOne() {
    const element = document.getElementById("example-one");
    const button = document.getElementById("my-button");
    element.remove();
    button.remove();
  }
    functionTwo(){
    const element = document.getElementById("example-two");
    const button = document.getElementById("my-button");
    element.remove();
    button.remove();
  }


     // useEffect(() => {
    // getProducts()
    //  }, [])
render(){
    return (
        
        <div>
            <Button onClick={this.getProducts}>Get Products</Button>
            <Figure id="example-one">
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://m.media-amazon.com/images/I/614MjO2mNiL._SL1500_.jpg"
                />
                <Figure.Caption>
                    Watermelon Glow Sleeping Mask
                    <br />
                    Glow Recipe
                    <br />
                    $45
                    <br />
                    Softening, Moisturizing, Hydrating
                    <br />
                </Figure.Caption>
                </Figure>
                <br />
                <Button id="my-button" variant="light" size="sm" onClick={this.functionOne}>Delete</Button>
                <br />
                <Figure id="example-two">
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://m.media-amazon.com/images/I/712LVFUc40S._SX679_.jpg"
                />
                <Figure.Caption>
                    Cake My Day Mask
                    <br />
                    I Dew
                    <br />
                    $20
                    <br />
                    Hydrating and Moisturizing
                    <br />
                </Figure.Caption>
            </Figure>
            <br />
            <Button id="my-button" variant="light" size="sm" onClick={this.functionTwo}>Delete</Button>

            <br />
                    <NewProductComponent
                    newProductServerError={this.newProductServerError}
                    createNewProduct={this.createNewProduct}
                    newProduct={this.state.newProduct}
                    ></NewProductComponent>
                    {this.state.products.reverse().map((item)=>{
                        return <ProductComponent
                        key={item.id}
                        product={item}
                        deleteProduct={this.deleteProduct}
                        updateProduct={this.updateProduct}
                        ></ProductComponent>
            })}
        </div>
    )
 }
}
export default SkincareContainer;