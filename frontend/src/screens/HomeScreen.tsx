import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../products';
import Product from '../components/Product'

const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {


        const fetchProducts = async () => {

            // headers: {
            //     'Content-Type': 'application/json;charset=UTF-8',
            //     "Access-Control-Allow-Origin": "*",
            // }
            const { data } = await axios.get('/api/products');

            setProducts(data);
        }

        fetchProducts();

    }, [])


    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product: any) => (
                    <Col key={product._id} sm={12} md={6} lg={4}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default HomeScreen;