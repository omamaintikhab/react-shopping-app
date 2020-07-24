import React from 'react';
import './App.css';
import data from './data.json'
import Products from './components/products';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:""

    }
  }
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">Shopping Cart</a>
      </header>
      <main>Product List
        <div className="content">
          <div className="main">
            <Products
            products={this.state.products}
            ></Products>
          </div>
          <div className="sidebar">
            cartitems
          </div>
        </div>

      </main>
      <footer>All right reserved</footer>
    </div>
  );
}
}
export default App;
