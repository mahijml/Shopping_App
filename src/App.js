import './App.css';
import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Products from './components/products';
import Product from './components/product';
import Cart from './components/cart';
import Login from './components/login';
import CheckOut from './components/checkOut';
import Search from './components/search';
import Register from './components/register';
import { Route , Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render(){
    return (
      <>
        
          
          <UserAuthContextProvider>
          <Header/>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route exact path="/products/:id" element={<Product/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path='/checkout' element={<CheckOut/>}/>
            <Route exact path='/search/:searchTerm' element={<Search/>}/>
            </Routes>
            </UserAuthContextProvider>
      </>
    );
  }
}

export default App;
