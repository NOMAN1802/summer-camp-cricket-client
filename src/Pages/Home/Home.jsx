/* eslint-disable no-unused-vars */
import React from 'react';
import Container from '../../components/Shared/Container';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <Container>
             <Helmet>
                <title>SH75 Academy | Home</title>
            </Helmet>
            <h2>This is Home</h2>
        </Container>
    );
};

export default Home;