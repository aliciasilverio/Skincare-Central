import { useEffect, useState } from "react";
import ProductComponent from "./Product/productComponent";
import NewProductComponent from "./NewProduct/newProductComponent";
import { Figure, Button } from 'react-bootstrap';
import PostProductComponent from "./postProduct/postProductComponent";

const SkincareContainer = () => {
    const [requestError, setRequestError] = useState("")
    const [products, setProducts] = useState([])
    const [newProductServerError, setNewProductServerError] = useState ("")
    const createNewProduct = async (newProduct) => {
        const apiResponse = await fetch("https://polar-oasis-46988.herokuapp.com/products", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                "Content-type": "application/json"
            }
        })
        // Parse response from back-end
        const parsedResponse = await apiResponse.json()
        // If the response is success:
        console.log(parsedResponse)
        if(parsedResponse.success){
            // Add the new item to the state
            setProducts([parsedResponse.data, ...products])
        } else {
            setNewProductServerError(parsedResponse.data)
        }
    }
    
    const deleteProduct = async (idToDelete) => {
        try{
            const apiResponse = await fetch(`https://polar-oasis-46988.herokuapp.com/products/${idToDelete}`, {
            method: "DELETE"
            })
            const parsedResponse = await apiResponse.json()
            if(parsedResponse.success){
                const newProducts = products.filter(product => product._id !== idToDelete)
                setProducts(newProducts)
            }else{
            }
        } catch (err){
            console.log(err)
            setRequestError(err.message)
            // TODO: handle front-end error, not sure what the would be 
        }
    }

    const getProducts = async () => {
        try{
            const products = await fetch("https://polar-oasis-46988.herokuapp.com/products")
            const parsedProducts = await products.json();
            setProducts(parsedProducts.data)
        } catch (err){
            console.log(err)
        }
    }
    const updateProduct = async (idToUpdate, productToUpdate) => {

        const apiResponse = await fetch(`https://polar-oasis-46988.herokuapp.com/products${idToUpdate}`, {
            method: "PUT",
            body: JSON.stringify(productToUpdate),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await apiResponse.json();
        if(parsedResponse.success){
            const newProducts = products.map(products => products._id === idToUpdate ? productToUpdate : products)
            setProducts(newProducts)
        } else {
            setRequestError(parsedResponse.data) 
        }
    }
    function functionOne() {
        const element = document.getElementById("example-one");
        const button = document.getElementById("my-button");
        element.remove();
        button.remove();
      }
      function functionTwo(){
        const element = document.getElementById("example-two");
        const button = document.getElementById("my-button");
        element.remove();
        button.remove();
      }


    useEffect(()=>{
        getProducts()
     }, [])
    return (
        
        <div>
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
                <Button id="my-button" variant="light" size="sm" onClick={functionOne}>Delete</Button>
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
            <Button id="my-button" variant="light" size="sm" onClick={functionTwo}>Delete</Button>

            <br />
                    <NewProductComponent
                    newProductServerError={newProductServerError}
                    createNewProduct={createNewProduct}
                    ></NewProductComponent>
                    {products.reverse().map((product)=>{
                        return <ProductComponent
                        key={product._id}
                        product={product}
                        deleteProduct={deleteProduct}
                        updateProduct={updateProduct}
                        ></ProductComponent>
            })}
        </div>
    )
}
export default SkincareContainer;