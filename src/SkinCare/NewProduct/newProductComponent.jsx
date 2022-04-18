import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap"



const NewProductComponent = (props) => {
    const [state, setState] = useState('start')
    const [showing, setShowing] = useState(false)
    const [newProduct, setNewProduct] = useState({
        productName: "",
        image: "",
        brand: "",
        price: "",
        benefits: "" 
    });



    const [isValidState, setIsValidState] = useState({valid: true, message: ""})

 
    const submitNewProduct = (e)=>{
        e.preventDefault()
        let validSubmission = true;

        if(validSubmission){
            props.createNewProduct(newProduct)
            setNewProduct({
                productName: "",
                image: "",
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

    const toggleShowing = () => {
        setShowing(!showing)
    }
    const handleInputChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value 
        })
    }
    
    function getInfo(){
        var x = document.getElementById("submit-Btn").value;
        document.getElementById("post").innerHTML = x;
      }

    
    return(
        <>
        {
            showing 
            ?
            
            <div id="new-product-form">
                <form onSubmit={submitNewProduct}>
                    {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                    { props.newProductServerError ? <p className="form-error">{props.newProductServerError}</p> : null}
                
                    <Form.Control onChange={handleInputChange}  id="post"className="w-50" type="text" name="productName" placeholder="Product Name" value={newProduct.productName}/>
                    <br />
                    <Form.Control onChange={handleInputChange}  id="post" className="w-50" type="text" name="brand" placeholder="Brand Name" value={newProduct.brand}/>
                    <br />
                    <Form.Control onChange={handleInputChange}  id="post"className="w-50" type="number" name="price" placeholder="Price" value={newProduct.price}/>
                    <br />
                    <Form.Control onChange={handleInputChange}  id="posts" className="w-50" type="text" name="benefits" placeholder="Skin Benefits" value={newProduct.benefits}/>
                    {/* <br /> */}
                    {/* <Form.Control as="textarea" onChange={handleInputChange} type="text" placeholder="Review"rows={3} /> */}
                    <br />
                    <Form.Control onChange={handleInputChange}  id="post" className="w-50" type="file" size="sm" name="image"/>

                    <Button id="submit-Btn"variant="success" type="submit" onClick={getInfo}>Submit Product</Button>
                    <p></p>
                    <Button variant="secondary" onClick={toggleShowing}>Close Post</Button>
                
                </form>

            </div>
            :
            <div>
            <Button variant="success" onClick={toggleShowing}>Add a Product</Button>
            <p id="post"></p>   
            </div>
        }
            
                    
        </>
    )
}
export default NewProductComponent;