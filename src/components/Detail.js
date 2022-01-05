import React from "react";
import products from "../products";
function Detail({ cookie }) {
  return (
    <div className="detailimg">
      <img alt={cookie.name} src={cookie.image} />
      <p>{cookie.name}</p>
      <p className="product-price">{cookie.price} KD</p>
      <p>{cookie.desc}</p>
    </div>
  );
}

export default Detail;
