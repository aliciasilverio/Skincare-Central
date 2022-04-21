import { Component } from "react";
import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap"
import React from "react";


class NewProductComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            valid: true,
            message: "",
            showing: false,
            newProduct: {
                productName: "",
                image: "",
                brand: "",
                price: "",
                benefits: ""  
            }
        }
    }
 
        submitNewProduct = (e)=>{
        e.preventDefault()
        let validSubmission = true;

        if(validSubmission){
            this.props.createNewProduct(this.newProduct)
            this.newProduct.setState({
                productName: "",
                image: "",
                brand: "",
                price: "",
                benefits: "" 
            })
            this.setState({
                valid: true,
                message: ""
            })
            this.setState({
                showing: false,
            })
        }
    }

    toggleShowing = () => {
        this.setState(!this.state.showing);
    }
    handleInputChange = (e) => {
        this.newProduct.setState({
            ...this.newProduct,
            [e.target.name]: e.target.value 
        })
    }
    
     getInfo = () => {
        const x = document.getElementById("submit-Btn").value;
        document.getElementById("post").innerHTML = x;
      }

 render(){   
    return(
        <>
        {
            this.showing 
            ?
            
            <div id="new-product-form">
                <form onSubmit={this.submitNewProduct}>
                    {this.state.valid ? null : <p className="form-error">{this.state.message}</p>}
                    { this.props.newProductServerError ? <p className="form-error">{this.props.newProductServerError}</p> : null}
                
                    <Form.Control onChange={this.handleInputChange}  id="post"className="w-50" type="text" name="productName" placeholder="Product Name" value={this.newProduct.productName}/>
                    <br />
                    <Form.Control onChange={this.handleInputChange}  id="post" className="w-50" type="text" name="brand" placeholder="Brand Name" value={this.newProduct.brand}/>
                    <br />
                    <Form.Control onChange={this.handleInputChange}  id="post"className="w-50" type="number" name="price" placeholder="Price" value={this.newProduct.price}/>
                    <br />
                    <Form.Control onChange={this.handleInputChange}  id="posts" className="w-50" type="text" name="benefits" placeholder="Skin Benefits" value={this.newProduct.benefits}/>
                    {/* <br /> */}
                    {/* <Form.Control as="textarea" onChange={this.handleInputChange} type="text" placeholder="Review"rows={3} /> */}
                    <br />
                    <Form.Control onChange={this.handleInputChange}  id="post" className="w-50" type="file" size="sm" name="image"/>

                    <Button id="submit-Btn"variant="success" type="submit" onClick={this.getInfo}>Submit Product</Button>
                    <p></p>
                    <Button variant="secondary" onClick={this.toggleShowing}>Close Post</Button>
                
                </form>

            </div>
            :
            <div>
            <Button variant="success" onClick={this.toggleShowing}>Add a Product</Button>
            <p id="post"></p>   
            </div>
        }
            
                    
        </>
        )
    }
}

export default NewProductComponent;