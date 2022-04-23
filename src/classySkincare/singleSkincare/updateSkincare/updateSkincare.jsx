import {Form, FormControl, Button, Modal} from 'react-bootstrap';
import { useState } from "react";
import { ReactDOM } from 'react';


const UpdateProduct = (props) => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [showing, setShowing] = useState(false)
        const [isValidState, setIsValidState] = useState({valid: true, message: ""})
        // 1. function that setShowing function as TRUE! = !true when clicked on 
        const toggleShowing = () => {
            // 2. set variable to the opposite
            setShowing(!showing)
        }
    
    return(
            <>
             <div className="section-head col-sm-12">
            </div>
            <Button variant="primary" onClick={handleShow} className="button">
                UPDATE
            </Button> 
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your product!</Modal.Title>
                </Modal.Header>
                <Modal.Body>     
                    <Form onSubmit={(e)=>{e.preventDefault(); props.updateProduct(props.product.id)}}>
                        {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                        {props.newItemServerError ? <p className="form-error">{props.newItemsServerError}</p> : null}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image:</Form.Label>
                            <FormControl onChange={props.handleUpdateProductInputChange}  name="image" type="text"></FormControl>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name:</Form.Label> 
                            <FormControl onChange={props.handleUpdateProductInputChange} name="productName" type="text" value={props.product.productName}></FormControl>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Brand:</Form.Label>
                            <FormControl onChange={props.handleUpdateProductInputChange} name="brand" type="text" value={props.product.brand}></FormControl>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price:</Form.Label> 
                            <FormControl onChange={props.handleUpdateProductInputChange} name="price" type="number" value={props.product.price}></FormControl>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Benefits:</Form.Label>
                            <FormControl as="textarea" rows={3} onChange={props.handleUpdateProductInputChange} name="benefits" type="text" value={props.product.benefits}></FormControl>
                        </Form.Group>
                            <Button onClick={handleClose} variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateProduct;