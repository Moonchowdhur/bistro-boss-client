import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filtredData = data.filter((food) => food.category === "popular");
  //       setMenu(filtredData);
  //     });
  // }, []);

  // use custom hook as it's required many places
  const [menu] = UseMenu();
  const popular = menu.filter((food) => food.category === "popular");
  return (
    <div className="my-8">
      <SectionTitle
        subheading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {popular.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      {/* <button className="p-2 text-center mx-auto">View Full Menu</button> */}
    </div>
  );
};

export default PopularMenu;
