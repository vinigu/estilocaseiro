import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Index from './pages/index/Index';

import Ibirapuera from './pages/ibirapuera/index';

import Aestilo from './pages/estilocaseiro/index';

export default function Routes(){

  // Para produção
  // <BrowserRouter basename="/site-novo">


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/ibirapuera-boulevard" exact component={Ibirapuera}/>
        <Route path="/a-estilo" exact component={Aestilo}/>
      </Switch>
    </BrowserRouter>
  )
}