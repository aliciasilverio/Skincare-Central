// import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';




const SingleSkincareComponent = (props) => {
    return(
        <div>
            <img src={props.product.image} />
            <h3><b>{props.product.productName}</b></h3>
            <h5>{props.product.brand}</h5>
            <h5>${props.product.price}</h5>
            <h5>{props.product.benefits}</h5>
            <br />
            <Button variant="danger" onClick={()=>{props.deleteProduct(props.product.id)}}>DELETE {props.product.productName}</Button>
            <br />
        </div>
    )
}

export default SingleSkincareComponent;