import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

import { Container } from 'react-bootstrap';
export default class App extends React.Component {

    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="py-3">
                    <Container>
                        <HomeScreen />
                    </Container>
                </main>
                <Footer />

            </React.Fragment>
        );
    }
}
