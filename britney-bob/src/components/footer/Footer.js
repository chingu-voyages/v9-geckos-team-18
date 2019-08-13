import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer(props) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || 0;
  return (
    <div className="footer" onClick={props.onCartClick}>
      <img
        src="/assets/shopping-cart.svg"
        alt="product img"
        className="footer-cart-img"
      />
      <div className="footer-cart-qty-box">{cartData.qty}</div>
    </div>
  );
}

export default Footer;
