import React, { Component } from "react";
import "./cart.css";

class Cart extends Component {
  componentDidMount() {
    let x = window.matchMedia("(max-width: 700px)");
    let cartBox = document.querySelector(".cart-box");
    if (x.matches) {
      cartBox.style.width = "";
    }else{
      cartBox.style.width = "34vw";
      cartBox.classList.add("cart");
    }
  }

  renderItem = (data, deleteItem) => {
    console.log("slfjslkdfj", data);
    if (data !== 0) {
      return data.items.map((item, i) => {
        return (
          <div className="flex sans-serif ma2 fw3" key={i}>
            <div className="cart-li__col-1 flex items-center">
              <div className='pointer' onClick={() => deleteItem(item)}>x</div>
              <div className="cart-li__img-box ml3" />
              <div className="ml2">{item.title}</div>
            </div>
            <div className="cart-li__col-2 flex items-center justify-center">{item.qty}</div>
            <div className="cart-li__col-3 flex items-center justify-end">${item.amount}</div>
          </div>
        );
      });
    }
  };

  render() {
    let { cartData, closeCartBtn, deleteItem } = this.props;
    return (
      <div className="cart-box overflow-hidden ph5 pv4">
        <div className="sans-serif tr f1 fw1 pointer" onClick={closeCartBtn}>x</div>
        <h2 className="tc f2 fw3 pb4">Cart</h2>
        <div className="flex sans-serif f6">
          <div className="cart-header__col-1">ITEM</div>
          <div className="cart-header__col-2 tc">QTY</div>
          <div className="cart-header__col-3 tr">PRICE</div>
        </div>
        <hr />
        <div className="cart-main">{this.renderItem(cartData, deleteItem)}</div>
        <hr />
        <div className="cart-footer">
          <div className="cart-footer-text" />
        </div>
        <div className="cart__checkout-btn flex pointer sans-serif fw7 justify-center tracked white w-100 pa3">CHECKOUT</div>
      </div>
    );
  }
}

export default Cart;
