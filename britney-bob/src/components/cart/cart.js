import React, { Component } from "react";
import "./cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let data = this.props.cartData;
    this.setState({ data: data });
  }

  renderItem = data => {
    return data.map((item, i) => {
      return (
        <div className="cart-li" key={i}>
          <div className="cart-li__col-1">
            <div>X</div>
            <div className="cart-li__img-box" />
            <div className="cart-li--product-name">{item.title}</div>
          </div>
          <div className="cart-li__col-2">{item.qty}</div>
          <div className="cart-li__col-3">$ {item.price}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="cart-box">
        <div className="cart-box__close-btn" onClick={this.props.closeCartBtn}>X</div>
        <h2 className="cart-box__title">Cart</h2>
        <div className="cart-header">
          <div className="cart-header__col-1">ITEM</div>
          <div className="cart-header__col-2">QTY</div>
          <div className="cart-header__col-3">PRICE</div>
        </div>
        <hr />
        <div className="cart-main">{this.renderItem(this.state.data)}</div>
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
