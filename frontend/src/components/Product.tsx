import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import '../../public/images/airpods.jpg'
import Rating from './Rating';
import logo from '../images/airpods.jpg'
import { Link } from 'react-router-dom';

const Product = ({ product }: any) => {


    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <a>
                    <Card.Img src={require('./airpods.jpg').default} variant="top" />
                    {/* <img src={logo} /> */}
                </a>
            </Link>

            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong> {product.name} </strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>

                <Card.Text>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Product