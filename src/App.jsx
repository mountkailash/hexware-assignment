import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Hero />
      </MainWrapper>
    </>
  );
}

export default App;
