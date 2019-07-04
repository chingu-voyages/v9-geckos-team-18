import React from "react";
import "./store.css";

function Store(props) {
  return (
    <div className="contact-store">
      <h2 style={{ textAlign: "center" }}>Store</h2>
      <div className="row">
        {props.data.map((obj, i) => {
          return renderItem(obj, i, props);
        })}
      </div>
    </div>
  );
}

const renderItem = (obj, i, props) => {
  return (
    <div
      className="col-md-4"
      key={i}
      style={{ textAlign: "center", margin: "10px 0" }}
    >
      <div style={{ width: "100%", height: "auto" }}>
        <img src={obj.url} height="auto" width="100%" />
      </div>
      <div>{obj.title}</div>
      <div>{obj.price}</div>
      <button onClick={() => props.addToCart(obj)}>ADD TO CART</button>
    </div>
  );
};

export default Store;
