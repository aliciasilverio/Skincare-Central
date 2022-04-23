import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';




const SingleSkincareComponent = (props) => {
    return(
        <div>
            <h3>{props.product.productName}</h3>
            <p>This product is called: {props.product.productName}</p>
        </div>
    )
}

export default SingleSkincareComponent;