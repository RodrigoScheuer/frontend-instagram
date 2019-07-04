import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // necessário para ter acesso as rotas do browser

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
