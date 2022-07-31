import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Container } from 'react-bootstrap';
export default class App extends React.Component {

    constructor(props: any) {
        super(props);
    }

    getRoutes(): any {

        return (
            <>

            </>
        )
    }


    render() {
        return (
            <Router>

                <Header />
                <main className="py-3">
                    <Container>

                        <Routes>

                            <Route path='/' element={<HomeScreen />} caseSensitive />
                            <Route path='/product/:id' element={<ProductScreen />} key={':id'} />

                        </Routes>

                    </Container>
                </main>
                <Footer />
            </Router>
        );
    }
}
