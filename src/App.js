import React from 'react';
import Router from './components/router';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import './helpers/styles/styles.scss';

const Wrapper = styled.div`
  background: red;
`

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
