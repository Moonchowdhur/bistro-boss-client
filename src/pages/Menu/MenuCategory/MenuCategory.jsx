import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ coverImg, title, items, heading, subheading }) => {
  return (
    <div className="pt-8">
      {title && (
        <Cover
          img={coverImg}
          heading={heading}
          subheading={subheading}
          title={title}
        ></Cover>
      )}
      <div className="grid grid-cols-1 my-20 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-b-black border-b-4 border-r-0 border-l-0 border-t-0">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
