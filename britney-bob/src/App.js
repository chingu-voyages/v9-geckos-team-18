import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BrandBanner from "./components/brand-banner/BrandBanner";
import { FrameNav, DropDownNav } from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import { addToCart, removeItem } from "./handlers/cart";

let storeData = [
  {
    title: "Product",
    id: 1,
    price: 100,
    url:
      "https://www.thevintagenews.com/wp-content/uploads/2019/02/madonna-di-castelfiorentino-1280s-453x640.jpg"
  },
  {
    title: "Product",
    id: 2,
    price: 100,
    url:
      "https://66.media.tumblr.com/fc360f5a220638218c302762b02a96c3/tumblr_myndcmZsw91r6f0d9o1_500.jpg"
  },
  {
    title: "Product",
    id: 3,
    price: 100,
    url:
      "https://66.media.tumblr.com/fa58ad72bf9eba2211aa4525bdee56de/tumblr_mqt1yiHffJ1r6f0d9o1_500.jpg"
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCart: true,
      cartData: { items: [] }
    };
  }

  componentDidMount() {
    let cartData = JSON.parse(localStorage.getItem("cart")) || 0;
    this.setState({ cartData: cartData });

    let x = window.matchMedia("(max-width: 700px)");
    if (x.matches) {
      let contentBox = document.querySelector(".content-box");
      console.log(contentBox);
      contentBox.style.width = "75vw";
      contentBox.style.left = "12.5vw";
      // If media query matches
      document.querySelector(".main-img").src =
        "assets/background-main-mobile.png";
      document.querySelector(".left-door-img").src =
        "assets/background-leftdoor-mobile.png";
      document.querySelector(".right-door-img").src =
        "assets/background-rightdoor-mobile.png";
      document.querySelector(".logo-img").style.display = "none";
      // document.querySelector(".nav-img").style.display = "none";
    }
  }

  deleteItem = item => {
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

  renderNav = () => {
    let x = window.matchMedia("(max-width: 700px)");
    if (x.matches) {
      return <DropDownNav onCartClick={this.onCartClick} />;
    }
    return (
      <div className="nav-img">
        <FrameNav onCartClick={this.onCartClick} />
      </div>
    );
  };

  renderCart = () => {
    let cartData = this.state.cartData;
    // let x = window.matchMedia("(max-width: 700px)");
    // if (x.matches) {
      return (
        <Cart
        className={`${this.state.showCart ? "show-cart" : ""}`}
          cartData={cartData}
          deleteItem={item => this.deleteItem(item)}
          closeCartBtn={() =>
            (document.querySelector(".cart-box").style.display = "none")
          }
        />
      );
    // } else {
    //   return (
    //     <div className={`cart ${this.state.showCart ? "show-cart" : ""}`}>
    //       <Cart
    //         cartData={cartData}
    //         deleteItem={item => this.deleteItem(item)}
    //         closeCartBtn={() => this.setState({ showCart: false })}
    //       />
    //     </div>
    //   );
    // }
  };

  render() {
    return (
      <div className="App">
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
          {this.renderNav()}
          <div className="content-box">
            {this.renderCart()}
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
          <Footer onCartClick={this.onCartClick} />
        </Router>
      </div>
    );
  }
}

export default App;
