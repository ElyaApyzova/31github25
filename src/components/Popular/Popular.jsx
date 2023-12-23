import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Women's popular clothes</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
