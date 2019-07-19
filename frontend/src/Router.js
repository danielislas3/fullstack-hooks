import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Foods from './components/Foods';

const Router = () =>(


  <BrowserRouter>
  
    <Switch>
      <>
      <Route exact path="/" component={Home} />
      <Route exact path="/foods" component={Foods} />
      </>
    </Switch>
  </BrowserRouter>
)


export default Router