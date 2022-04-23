import {Form, FormControl, Button} from 'react-bootstrap'

const NewSkincareComponent = (props) => {
    return(
        <div>
            <h5>Add a New Product</h5>
            <Form onSubmit={props.createNewProduct}>
                Image: <center><FormControl onChange={props.handleNewProductInputChange} className="w-50"  name="image" type="file" ></FormControl></center>
                <br />
                Name: <center><FormControl onChange={props.handleNewProductInputChange} className="w-50" name="productName" type="text"></FormControl></center>
                <br />
                Brand: <center><FormControl onChange={props.handleNewProductInputChange} className="w-50" name="brand" type="text"></FormControl></center>
                <br />
                Price: <center><FormControl onChange={props.handleNewProductInputChange} className="w-50" name="price" type="number"></FormControl></center>
                <br />
                Benefits: <center><FormControl onChange={props.handleNewProductInputChange} className="w-50" name="benefits" type="text"></FormControl></center>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default NewSkincareComponent