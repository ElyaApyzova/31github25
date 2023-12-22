import React from "react";
import "./Item.css";
const Item = () => {
  return (
    <div className="item">
      <img src={OmitProps.image} alt="" />
      <p>{OmitProps.name}</p>
      <div className="item-prices"></div>
    </div>
  );
};

export default Item;
