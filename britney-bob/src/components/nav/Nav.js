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
    <li className="nav-list__ul__li pointer dn black flex items-center justify-center tc" onClick={onNavLinkClick(obj, props)} key={i}>
      <Link to={obj.title.toLowerCase()}>
        <span className="nav-list__ul__li-text fw3 tc dib">{obj.title}</span>
      </Link>
      {obj.title.toLowerCase() === "cart" ? <div className="cart-qty-box white sans-serif fw1 ma1 pa1">{cartData.qty}</div> : null}
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
      <input type="checkbox" className="dn" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="nav-btn dn">
        <div className="nav-btn__icon-1 absolute" />
        <div className="nav-btn__icon-2 absolute" />
        <div className="nav-btn__icon-3 absolute" />
      </label>
      <div className="tc">
        <img
          src="assets/nav.svg"
          alt="logo"
          width="100%"
          height="auto"
          className="banner-img"
        />
        <ul className="nav-list__ul absolute tc ma0 pa0 link list flex flex-column justify-between">
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
