import React, { Component } from "react";
import "./cart.css";

class Cart extends Component {
  renderItem = (data, deleteItem) => {
    console.log("slfjslkdfj", data);
    if (data !== 0) {
      return data.items.map((item, i) => {
        return (
          <div className="cart-li" key={i}>
            <div className="cart-li__col-1">
              <div onClick={() => deleteItem(item)}>X</div>
              <div className="cart-li__img-box" />
              <div className="cart-li--product-name">{item.title}</div>
            </div>
            <div className="cart-li__col-2">{item.qty}</div>
            <div className="cart-li__col-3">$ {item.amount}</div>
          </div>
        );
      });
    }
  };

  render() {
    let { cartData, closeCartBtn, deleteItem } = this.props;
    return (
      <div className="cart-box">
        <div className="cart-box__close-btn" onClick={closeCartBtn}>
          X
        </div>
        <h2 className="cart-box__title">Cart</h2>
        <div className="cart-header">
          <div className="cart-header__col-1">ITEM</div>
          <div className="cart-header__col-2">QTY</div>
          <div className="cart-header__col-3">PRICE</div>
        </div>
        <hr />
        <div className="cart-main">{this.renderItem(cartData, deleteItem)}</div>
        <hr />
        <div className="cart-footer">
          <div className="cart-footer-text" />
        </div>
        <div className="cart__checkout-btn">CHECKOUT</div>
      </div>
    );
  }
}

export default Cart;
