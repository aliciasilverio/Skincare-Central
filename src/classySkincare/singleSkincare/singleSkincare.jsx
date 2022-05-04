import { Button, Card } from 'react-bootstrap';
import UpdateProduct from './updateSkincare/updateSkincare';
import { ReactDOM } from 'react';

const SingleSkincareComponent = (props) => {
    return(
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.product.image} />
            <Card.Body>
                <Card.Title>{props.product.productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.product.brand}</Card.Subtitle>
                <Card.Text>{props.product.benefits}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{props.product.price}</Card.Subtitle>
                <UpdateProduct product={props.product} handleUpdateProductInputChange ={props.handleUpdateProductInputChange} updateProduct={props.updateProduct}></UpdateProduct>
            </Card.Body>
            </Card>
            {/* <img src={props.product.image} />
            <h3><b>{props.product.productName}</b></h3>
            <h5>{props.product.brand}</h5>
            <h5>${props.product.price}</h5>
            <h5>{props.product.benefits}</h5>
            <br />
            <Button variant="danger" onClick={()=>{props.deleteProduct(props.product.id)}}>DELETE</Button>
            <UpdateProduct product={props.product} handleUpdateProductInputChange ={props.handleUpdateProductInputChange} updateProduct={props.updateProduct}></UpdateProduct>
            <br /> */}
        </div>
    )
}

export default SingleSkincareComponent;