import { useState } from "react";
import { Button, FormControl, Form, Stack } from "react-bootstrap";


const ProductComponent = (props) => {
    const [isValidState, setIsValidState] = useState({valid: true, message: ""})
    const [showing, setShowing] = useState(false)
    const toggleShowing = () => {
        setShowing(!showing)
    }
    const [updateProduct, setUpdateProduct] = useState({
        productName: props.product.productName,
        brand: props.product.brand, //brand
        benefits: props.product.benefits, //benefits
        price: props.product.price, //price
        _id: props.product._id //id

    })
    const handleInputChange = (e) => {
        setUpdateProduct({
            ...updateProduct,
            [e.target.name]: e.target.value 
        })
    }
    const submitUpdateProduct = (e) => {
        e.preventDefault();
        props.updateProduct(props.product._id, updateProduct)
        let validSubmission = true;

        if(validSubmission){
            props.updateProduct(updateProduct)
            setUpdateProduct({
                productName: "",
                brand: "",
                price: "",
                benefits: "" 
            })
            setIsValidState({
                valid: true,
                message: ""
            })
            setShowing(false)
        }
    }
    return(
        <div className="index-single-item">
            <h2>
               Product Name: {props.product.productName}
                <br />
              Brand:  {props.product.brand}
                <br />
               Price: ${props.product.price}
                <br />
               Benefits: {props.product.benefits}
                
            </h2>
            {
                 showing ?
                 <div id="edit-product-form">
                 <Button variant="Secondary" onClick={toggleShowing}>Close Edit</Button>
                 <Form onSubmit={submitUpdateProduct}>
                     {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                     <Form.Control onChange={handleInputChange} className="w-50" type="text" name="productName" placeholder="Product Name" value={updateProduct.productName}></Form.Control>
                     <br />
                     <Form.Control onChange={handleInputChange} className="w-50" type="text" name="brand" placeholder="Brand Name" value={updateProduct.brand}/>
                     <br />
                     <Form.Control onChange={handleInputChange} className="w-50" type="number" name="price" placeholder="Price" value={updateProduct.price}/>
                     <br />
                     <Form.Control onChange={handleInputChange} className="w-50" type="text" name="benefits" placeholder="Skin Benefits" value={updateProduct.benefits}/>
                     <br />
                     <Form.Control onChange={handleInputChange} className="w-50" type="file" size="sm" value={updateProduct.image} />
                     <br />
                     <Button variant="Primary" type="submit">Edit Product</Button>
                 </Form>
                 </div>
                 :
                 <Button variant="Primary" onClick={toggleShowing}>Edit this product</Button>
            }
            <br />
             <Button variant="Danger" onClick={()=>{
                 props.deleteProduct(props.product._id)
             }}>Delete Product</Button>
            
             <>
             </>
             
        </div>
    )
}
export default ProductComponent;