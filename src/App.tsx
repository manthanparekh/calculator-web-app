import React from 'react';
import styled from 'styled-components';
import './App.css';
import Calculator from './components/Calculator';

const Container = styled.div`
  background: #447AC4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  // width: 100vw; 
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
