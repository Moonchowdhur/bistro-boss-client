import React from "react";
import FoodCard from "../../components/FoodCard/FoodCard";

const OrderTabs = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((items) => (
        <FoodCard key={items._id} items={items}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTabs;
