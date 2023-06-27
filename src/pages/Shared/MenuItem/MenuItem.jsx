import React from "react";

const MenuItem = ({ item }) => {
  const { image, recipe, price, name } = item;
  return (
    <div className="flex gap-3 items-center space-y-3 p-4">
      <img
        src={image}
        style={{ borderRadius: "30px 150px 120px 120px" }}
        className="w-20  h-20 border"
        alt=""
      />
      <div>
        <h2>{name}</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
