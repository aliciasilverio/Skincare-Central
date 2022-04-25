// import { Button } from 'react-bootstrap';
import React from "react";
import SingleSkincareComponent from "./singleSkincare/singleSkincare";
import NewSkincareComponent from "./newSkincare/newSkincare";
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
            },
            productToUpdate: {
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
        const apiResponse = await fetch("https://polar-oasis-46988.herokuapp.com/api/products/", {
            method: "POST",
            body: JSON.stringify(this.state.newProduct),
            headers: {
                'Content-Type': "application/json"
            }
        })
        if(apiResponse.status === 201){
            const creationResponseParsed = await apiResponse.json()
            this.setState({
                products: [...this.state.products, creationResponseParsed]
            })
        }
    }
    
    async getProducts(){
        const getProductsApiResponse = await fetch("https://polar-oasis-46988.herokuapp.com/api/products/")
        const parsedProducts = await getProductsApiResponse.json();
        this.setState({
            products: parsedProducts
        })      
}

    deleteProduct = async(idToDelete) => {
        const deleteResponse = await fetch(`https://polar-oasis-46988.herokuapp.com/api/products/${idToDelete}`, {
            method: "DELETE"
        })
        if(deleteResponse.status === 204){
            this.setState({
                products: this.state.products.filter(p => p.id !== idToDelete)
            })
        }
    }

    handleUpdateProductInputChange = (e) => {
        console.log(this)
        console.log(e.target.value)
        this.setState({
            productToUpdate: {
                ...this.state.productToUpdate,
                [e.target.name] : e.target.value,
            }
        })
    }

    updateProduct = async (idToUpdate) => {
        const apiResponse = await fetch(`https://polar-oasis-46988.herokuapp.com/api/products/${idToUpdate}`, {
            method: "PUT",
            body: JSON.stringify(this.state.productToUpdate),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(apiResponse.status == 200){
            const parsedResponse = await apiResponse.json()
            this.setState({
                products: this.state.products.map(p => p.id ==idToUpdate ? parsedResponse: p)

            })
        }
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
                return<SingleSkincareComponent handleUpdateProductInputChange={this.handleUpdateProductInputChange} updateProduct={this.updateProduct} deleteProduct={this.deleteProduct} product={product} key={`product-${product.id}`}>{JSON.stringify(product)}</SingleSkincareComponent>
            })}
        </div>
        )
    }
}

export default ClassySkincareContainer;