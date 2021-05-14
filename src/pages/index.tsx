import React from 'react';
import Head from 'next/head';

import Logo from '../assets/logo.svg';
import { Container } from './styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Logo />
      <h1>ReactJS with typescript</h1>
      <p>
        A ReactJS + NextJS + Eslint + Prettier + Styled-Components Structure
      </p>
    </Container>
  );
};

export default Home;
