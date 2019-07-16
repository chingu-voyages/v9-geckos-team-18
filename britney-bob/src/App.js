import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BrandBanner from "./components/brand-banner/BrandBanner";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import { addToCart, removeItem } from "./handlers/cart";

let storeData = [
  {
    title: "Product",
    id: 1,
    price: 100,
    url: "https://www.thevintagenews.com/wp-content/uploads/2019/02/madonna-di-castelfiorentino-1280s-453x640.jpg"
  },
  {
    title: "Product",
    id: 2,
    price: 100,
    url: "https://66.media.tumblr.com/fc360f5a220638218c302762b02a96c3/tumblr_myndcmZsw91r6f0d9o1_500.jpg"
  },
  {
    title: "Product",
    id: 3,
    price: 100,
    url: "https://66.media.tumblr.com/fa58ad72bf9eba2211aa4525bdee56de/tumblr_mqt1yiHffJ1r6f0d9o1_500.jpg"
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCart: false,
      cartData: { items: [] }
    };
  }

  componentDidMount() {
    let cartData = JSON.parse(localStorage.getItem("cart")) || 0;
    this.setState({ cartData: cartData });
    console.log("KK", cartData);
  }

  deleteItem = item => {
    console.log("item", item.id);
    removeItem(item.id);
    let cartData = JSON.parse(localStorage.getItem("cart"));
    this.setState({ cartData: cartData });
  };

  addToCartClick = obj => {
    addToCart(obj);
    let cartData = JSON.parse(localStorage.getItem("cart"));
    this.setState({ cartData: cartData });
  };

  onCartClick = () => {
    this.setState({ showCart: true });
  };

  render() {
    let cartData = this.state.cartData;
    console.log("dfd", cartData);
    return (
      <div className="App">
        <div className={`cart ${this.state.showCart ? "show-cart" : ""}`}>
          <Cart
            cartData={cartData}
            deleteItem={item => this.deleteItem(item)}
            closeCartBtn={() => this.setState({ showCart: false })}
          />
        </div>
        <Router>
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
          <img
            src="assets/main.png"
            alt="main"
            width="100%"
            height="auto"
            className="main-img"
          />
          <div className="logo-img">
            <BrandBanner />
          </div>
          <div className="nav-img">
            <Nav onCartClick={this.onCartClick} />
          </div>
          <div className="content-box">
            <Route path="/about" component={About} />
            <Route
              path="/contact"
              render={routeProps => (
                <Contact
                  {...routeProps}
                  submitForm={data => console.log(data)}
                />
              )}
            />
            <Route
              path="/shop"
              render={routeProps => (
                <Shop
                  {...routeProps}
                  data={storeData}
                  addToCart={obj => this.addToCartClick(obj)}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
