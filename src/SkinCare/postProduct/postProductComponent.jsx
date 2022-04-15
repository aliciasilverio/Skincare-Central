import { Figure } from "react-bootstrap"

const PostProductComponent = (props) => {

    const postFunction = props.post.map(post=>{
        console.log("This is the console.log", post);
        return post
    })

    return(

        <div>
            <h1>These are your posts:</h1>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={postFunction}
                />
                <Figure.Caption>
                    {props.newProduct.productName}
                    <br />
                    {props.newProduct.brand}
                    <br />
                    ${props.newProduct.price}
                    <br />
                    {props.newProduct.benefits}
                    <br />
                </Figure.Caption>
            </Figure>
        </div>
    )
};



export default PostProductComponent;