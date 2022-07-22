import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Product = ({ product }: any) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </a>
        </Card>
    );
}

export default Product