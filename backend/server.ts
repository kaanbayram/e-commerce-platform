import express from 'express';
// const express = require('express');
import { products } from './data/products';
// import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './config/db';
import colors from 'colors';
dotenv.config()

connectDB();
const app = express();


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`) });

// var corsOptions = {
//     origin: "http://http://192.168.1.7:5000"
//   };

//   app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/products', (req, res) => {

    console.log(products);
    res.json(products);
});


app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});