import { useState } from 'react';
import './App.css';
import Header from './common/header/Header';
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import {
  BrowserRouter as Router,
  Switch,Route
} from "react-router-dom";
import Cart from './common/cart/Cart';
import Sdata from './components/shops/Sdata';

function App() {
  <title>Birdhouse</title>

  const {productItems} = Data;
  const  {shopItems } = Sdata;
  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit) {
      setCardItem(cartItem.map((item) => (
        item.id === product.id ? {...productExit, qty : productExit.qty+1 } : item)))
    } else {
      setCardItem([...cartItem, {...product, qty:1}])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit.qty === 1) {
      setCardItem(cartItem.filter((item) =>  item.id !== product.id ))
    } else {
      setCardItem(cartItem.map((item) => (item.id === product.id ? {...productExit, qty : productExit.qty - 1} : item)))
    }
  }

  return (
    <div className="App">
      <Router>
        <Header cartItem = {cartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems = {productItems} addToCart = {addToCart} shopItems = {shopItems}/>
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem = {cartItem} addToCart = {addToCart} decreaseQty = {decreaseQty} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
