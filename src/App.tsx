import './styles/index.scss';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navbar from 'constant/navbar';
import Pages from 'pages';

export const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <Pages/>
    </BrowserRouter>
  )
}

export default App