import express from 'express';
// const express = require('express');
const products = require('./data/products')


const app = express();

app.listen(5000, () => { console.log("Working on 5000") });


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