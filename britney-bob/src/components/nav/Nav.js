import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const frameNavData = [
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

const dropDownNavData = [
  {
    title: "About"
  },
  {
    title: "Shop"
  },
  {
    title: "Contact"
  }
];

export const FrameNav = props => {
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
        <ul className="nav-list__ul absolute tc ma0 pa0 list flex flex-column justify-between">
          {frameNavData.map((obj, i) => {
            return renderFrameNavItem(obj, i, props);
          })}
        </ul>
      </div>
    </section>
  );
};

const renderFrameNavItem = (obj, i, props) => {
  let cartData = JSON.parse(localStorage.getItem("cart")) || 0;
  console.log(cartData, "cartdat");
  return (
    <li
      className="nav-list__ul__li pointer dn black flex items-center justify-center tc"
      onClick={onNavLinkClick(obj, props)}
      key={i}
    >
      <Link to={obj.title.toLowerCase()}>
        <span className="nav-list__ul__li-text fw3 tc dib">{obj.title}</span>
      </Link>
      {obj.title.toLowerCase() === "cart" ? (
        <div className="cart-qty-box white sans-serif fw1 ma1">
          {cartData.qty}
        </div>
      ) : null}
    </li>
  );
};

const onNavLinkClick = (obj, props) => {
  return obj.title.toLowerCase() === "cart" ? props.onCartClick : null;
};


export const DropDownNav = props => {
  console.log(props);
  return (
    <section className="drop-down-nav-section">
      <input
        type="checkbox"
        className="drop-down-nav__checkbox"
        id="drop-down-nav-navi-toggle"
      />

      <div className="drop-down-nav">
        {/* nav closing button */}
        <label for="drop-down-nav-navi-toggle" className="close-btn">
          <div className="close-btn__icon-1" />
          <div className="close-btn__icon-2" />
        </label>
        <ul className="drop-down__list">
          {dropDownNavData.map((obj, i) => {
            return renderDropDownNavItem(obj, i, props);
          })}
        </ul>
        {/* nav opening button */}
        <label for="drop-down-nav-navi-toggle" className="nav-opening-btn">
          <div className="nav-opening-btn__1" />
          <div className="nav-opening-btn__2" />
          <div className="nav-opening-btn__3" />
        </label>
      </div>
    </section>
  );
};

const renderDropDownNavItem = (obj, i, props) => {
  console.log(obj.title, "cartdat");
  return (
    <li className="drop-down__item" key={i}>
      <Link to={obj.title.toLowerCase()} className="drop-down__link">
        {obj.title}
      </Link>
    </li>
  );
};
