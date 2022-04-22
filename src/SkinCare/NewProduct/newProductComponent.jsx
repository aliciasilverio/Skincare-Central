import React from "react"
import { Button, Form } from "react-bootstrap"


class NewProductComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            valid: true,
            message: "",
            showing: false,
        }
    }
 
        submitNewProduct = (e)=>{
        e.preventDefault()
        let validSubmission = true;

        if(validSubmission){
            this.props.createNewProduct(this.props.newProduct)
            console.log(this.props.newProduct);
            // this.setState({
            //     newProduct: {
            //     productName: "",
            //     image: "",
            //     brand: "",
            //     price: "",
            //     benefits: "" 
            // }})
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
        this.setState({showing: !this.state.showing});
    }
    handleInputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            ...this.props.newProduct,
            newProduct: {[e.target.name]: e.target.value}
        })
        console.log(this.props.newProduct)
    }
    
     getInfo = () => {
        const x = document.getElementById("submit-Btn").value;
        document.getElementById("post").innerHTML = x;
      }

 render(){   
    return(
        <>
        {
            this.state.showing 
            ?
            
            <div id="new-product-form">
                <form onSubmit={this.submitNewProduct}>
                    {this.state.valid ? null : <p className="form-error">{this.state.message}</p>}
                    { this.props.newProductServerError ? <p className="form-error">{this.props.newProductServerError}</p> : null}
                
                    <Form.Control onChange={this.handleInputChange}  id="post"className="w-50" type="text" name="productName" placeholder="Product Name" />
                    <br />
                    <Form.Control onChange={this.handleInputChange}  id="post" className="w-50" type="text" name="brand" placeholder="Brand Name" />
                    <br />
                    <Form.Control onChange={this.handleInputChange}  id="post"className="w-50" type="number" name="price" placeholder="Price"/>
                    <br />
                    <Form.Control onChange={this.handleInputChange}  id="posts" className="w-50" type="text" name="benefits" placeholder="Skin Benefits" />
                    {/* <br /> */}
                    {/* <Form.Control as="textarea" onChange={this.InputChange} type="text" placeholder="Review"rows={3} /> */}
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