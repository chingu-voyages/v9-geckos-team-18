import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BrandBanner from "./components/BrandBanner";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Store from "./components/Store";
import Cart from "./components/cart/cart";

let cartData = [{ title: "project", qty: 5, price: 100 }];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCart: false
    };
  }

  onCartClick = () => {
    this.setState({ showCart: true });
  };

  render() {
    return (
      <div className="App">
        <div className={`cart ${this.state.showCart ? "show-cart" : ""}`}>
          <Cart
            cartData={cartData}
            closeCartBtn={() => this.setState({ showCart: false })}
          />
        </div>
        <Router>
          <img
            src="assets/main.png"
            alt="main"
            width="100%"
            height="auto"
            className="main-img"
          />
          <div />
          <div className="logo-img">
            <BrandBanner />
          </div>
          <div className="nav-img">
            <Nav onCartClick={this.onCartClick} />
          </div>
          <img
            src="assets/left-door.png"
            alt="leftdoor"
            width="100%"
            height="auto"
            className="left-door-img"
          />
          <img
            src="assets/right-door.png"
            alt="rightdoor"
            width="100%"
            height="auto"
            className="right-door-img"
          />
          <div className="content-box">
            <Route path="/about" component={About} />
            <Route path="/contact" 
             render={(routeProps) => (
              <Contact {...routeProps} submitForm={(data)=>console.log(data)} />
            )}/>
            <Route path="/shop" component={Store} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
