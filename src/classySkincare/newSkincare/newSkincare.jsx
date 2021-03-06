import {Form, FormControl, Button, Modal} from 'react-bootstrap';
import { useState, useEffect } from "react";
import { ReactDOM } from 'react';


const NewSkincareComponent = (props) => {
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
            <Button Button variant="secondary" size="lg" onClick={handleShow} className="button">
                Add a Product
            </Button> 
                <br />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Product!</Modal.Title>
                </Modal.Header>
                <Modal.Body>     
                    <Form onSubmit={props.createNewProduct}>
                        {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                        {props.newItemServerError ? <p className="form-error">{props.newItemsServerError}</p> : null}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image:</Form.Label>
                            <FormControl onChange={props.handleNewProductInputChange}  name="image" type="text"></FormControl>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name:</Form.Label> 
                            <FormControl onChange={props.handleNewProductInputChange} name="productName" type="text"></FormControl>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Brand:</Form.Label>
                            <FormControl onChange={props.handleNewProductInputChange} name="brand" type="text"></FormControl>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price:</Form.Label> 
                            <FormControl onChange={props.handleNewProductInputChange} name="price" type="number"></FormControl>
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Benefits:</Form.Label>
                            <FormControl as="textarea" rows={3} onChange={props.handleNewProductInputChange} name="benefits" type="text"></FormControl>
                        </Form.Group>
                            <Button onClick={handleClose} variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewSkincareComponent