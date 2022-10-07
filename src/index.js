import React from 'react';
import ReactDOM from 'react-dom/client';
import Acai from './App';
import Signo from './libra';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sorveteria from './sorveteria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Acai/>}/>
      <Route path='/libra' element={<Signo/>}/>
      <Route path='/sorveteria' element={<Sorveteria/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

