import React from "react";
import "./shop.css";

function Shop(props) {
  return (
    <div className="contact-store overflow-hidden pa4">
      <h2 className='tc f1 fw3 pb4'>Shop</h2>
      <div className="row ph5">
        {props.data.map((obj, i) => {
          return renderItem(obj, i, props);
        })}
      </div>
    </div>
  );
}

const renderItem = (obj, i, props) => {
  return (
    <div className="col-md-4 sans-serif" key={i}>
      <div className="w-auto">
        <img src={obj.url} alt="product img" />
      </div>
      <div className='fl'>
        <div className='fw7 f4 mt3 ttu'>{obj.title}</div>
        <div className='product-price fw3'>${obj.price}</div>
      </div>
      <button className='fr mt3 dib fw6 f6 ph4 pv3 mb2 white' onClick={() => props.addToCart(obj)}>ADD TO CART</button>
    </div>
  );
};

export default Shop;
