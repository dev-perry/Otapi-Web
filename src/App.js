import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navigation from './components/navigation.js';
import Home from './components/home.js';
import Products from './components/products.js';
import CartPopover from './components/cart_popover.js';

function App() {
  return (
    <>
    <CartPopover/>
    <Navigation>
      <Switch>
        <Route path="/living"><Products category="living"/></Route>
        <Route path="/prints"><Products category="prints"/></Route>
        <Route path="/accessories"><Products category="accessories"/></Route>
        <Route path="/apparel"><Products category="apparel"/></Route>
        <Route path="/"><Home/></Route>
      </Switch>
  </Navigation>
  </>
  );
}

export default App;
