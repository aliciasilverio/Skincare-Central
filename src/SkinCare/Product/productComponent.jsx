import { useState } from "react";
import { Button, FormControl, Form, Stack } from "react-bootstrap";
import React from "react";



class ProductComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            valid: true,
            message: "",
            showing: false,
            updateProduct: {
                productName: "",
                image: "",
                brand: "",
                price: "",
                benefits: ""  
            }
        }
    }
  
            submitUpdateProduct = (e) => {
            e.preventDefault();
            // updateProduct(this.props.product.id, updateProduct)
            let validSubmission = true;

        if(validSubmission){
            this.props.updateProduct(this.updateProduct)
            this.updateProduct.setState({
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

        handleInputChange = (e) => {
        this.updateProduct.setState({
            ...this.updateProduct,
            [e.target.name]: e.target.value 
        })
    }
        updateProduct = useState({
        productName: this.props.product.productName,
        brand: this.props.product.brand, 
        benefits: this.props.product.benefits, 
        price: this.props.product.price, 
        _id: this.props.product.id 

    })

render(){
    return(
        <div className="index-single-item">
            <h2>
               Product Name: {this.props.product.productName}
                <br />
              Brand:  {this.props.product.brand}
                <br />
               Price: ${this.props.product.price}
                <br />
               Benefits: {this.props.product.benefits}
                
            </h2>
            {
                 this.showing ?
                 <div id="edit-product-form">
                 <Button variant="Secondary" onClick={this.toggleShowing}>Close Edit</Button>
                 <Form onSubmit={this.submitUpdateProduct}>
                     {this.state.valid ? null : <p className="form-error">{this.state.message}</p>}
                     <Form.Control onChange={this.handleInputChange} className="w-50" type="text" name="productName" placeholder="Product Name" value={this.updateProduct.productName}></Form.Control>
                     <br />
                     <Form.Control onChange={this.handleInputChange} className="w-50" type="text" name="brand" placeholder="Brand Name" value={this.updateProduct.brand}/>
                     <br />
                     <Form.Control onChange={this.handleInputChange} className="w-50" type="number" name="price" placeholder="Price" value={this.updateProduct.price}/>
                     <br />
                     <Form.Control onChange={this.handleInputChange} className="w-50" type="text" name="benefits" placeholder="Skin Benefits" value={this.updateProduct.benefits}/>
                     <br />
                     <Form.Control onChange={this.handleInputChange} className="w-50" type="file" size="sm" value={this.updateProduct.image} />
                     <br />
                     <Button variant="Primary" type="submit">Edit Product</Button>
                 </Form>
                 </div>
                 :
                 <Button variant="Primary" onClick={this.toggleShowing}>Edit this product</Button>
            }
            <br />
             <Button variant="Danger" onClick={()=>{
                 this.props.deleteProduct(this.props.product.id)
             }}>Delete Product</Button>
            
             <>
             </>
             
        </div>
    )
}
}
export default ProductComponent;