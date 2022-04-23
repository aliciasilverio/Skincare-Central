// import { useState, useEffect } from "react";
// import { Button } from 'react-bootstrap';




const SingleSkincareComponent = (props) => {
    return(
        <div>
            <img src={props.product.image} />
            <h3>This product is called: {props.product.productName}</h3>
            <h3>{props.product.brand} is the brand</h3>
            <h3>It costs ${props.product.price}</h3>
            <h3>These are the skincare benefits: {props.product.benefits}</h3>
            <br />
        </div>
    )
}

export default SingleSkincareComponent;