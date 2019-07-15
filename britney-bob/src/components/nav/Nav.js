import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const onNavLinkClick = (obj, props) => {
  return obj.title.toLowerCase() === "cart" ? props.onCartClick : null;
}

const navListItem = (obj, i, props) => {
  let cartData = JSON.parse(localStorage.getItem("cart")) || 0 ;
  console.log(cartData, "cartdat")
   return (
    <li className="nav-list__ul__li" onClick={onNavLinkClick(obj, props)} key={i}>
        <Link to={obj.title.toLowerCase()}>
          <span className="nav-list__ul__li-text">{obj.title}</span>
        </Link>
        {obj.title.toLowerCase() === "cart" ? <div className="cart-qty-box">{cartData.qty}</div> : null}
      </li>
  )
};

const data1 = [
  {
    title: "About"
  },
  {
    title: "Shop"
  },
  {
    title: "Cart",
    url: "./assets/home.png"
  },
  {
    title: "Contact"
  }
];

const SidePopupNav = props => {
  console.log(props);
  return (
    <section className="nav">
      <input type="checkbox" className="nav__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="nav-btn">
        <div className="nav-btn__icon-1" />
        <div className="nav-btn__icon-2" />
        <div className="nav-btn__icon-3" />
      </label>
      <div className="nav-banner">
        <img
          src="assets/nav.svg"
          alt="logo"
          width="100%"
          height="auto"
          className="banner-img"
        />
        <ul className="nav-list__ul">
          {data1.map((obj, i) => {
            return navListItem(obj, i, props);
          })}
        </ul>
      </div>
    </section>
  );
};

export default SidePopupNav;

// className="nav-list__ul"
