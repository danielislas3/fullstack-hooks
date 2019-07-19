import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Foods from './components/Foods';
import FoodDetails from './components/FoodDetails';
import FoodCreate from './components/FoodCreate';

const Router = () =>(


  <BrowserRouter>
  
    <Switch>
      <>
      <Route exact path="/" component={Home} />
      <Route exact path="/foods" component={Foods} />
      <Route exact path="/foods/:id" component={FoodDetails} />
      <Route exact path="/create" component={FoodCreate} />
      </>
    </Switch>
  </BrowserRouter>
)


export default Router