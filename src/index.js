import React from 'react';
import ReactDOM from 'react-dom/client';
import Acai from './App';
import Signo from './libra';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sorveteria from './sorveteria';
import Salario from './salarioliq';
import Paradas from './paradas';
import VerificarFebre from './febre';
import CinemaIngresso from './cinema';
import OrcamentoFamilia from './orcamento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Acai/>}/>
      <Route path='/libra' element={<Signo/>}/>
      <Route path='/sorveteria' element={<Sorveteria/>}/>
      <Route path='/salario' element={<Salario/>}/>
      <Route path='/paradas' element={<Paradas/>}/>
      <Route path='/febre' element={<VerificarFebre/>}/>
      <Route path='/cinema' element={<CinemaIngresso/>}/>
      <Route path='/orcamento' element={<OrcamentoFamilia/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

