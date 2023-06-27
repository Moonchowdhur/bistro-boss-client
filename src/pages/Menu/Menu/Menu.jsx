import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuimg from "../../../assets/menu/banner3.jpg";
import UseMenu from "../../../hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu] = UseMenu();
  const salad = menu.filter((food) => food.category === "salad");
  const pizza = menu.filter((food) => food.category === "pizza");
  const soup = menu.filter((food) => food.category === "soup");
  const dessert = menu.filter((food) => food.category === "dessert");
  const offered = menu.filter((food) => food.category === "offered");
  return (
    <div>
      {/* title */}
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* first cover */}
      <Cover
        img={menuimg}
        heading={"OUR MENU"}
        subheading={"Would you like to try a dist ?"}
      ></Cover>
      {/* TODAY'S OFFER title */}
      <SectionTitle
        subheading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* TODAY'S OFFER food item*/}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu items */}
      <MenuCategory
        items={dessert}
        coverImg={dessertImg}
        heading={"DESSERTS"}
        subheading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        title="desserts"
      ></MenuCategory>
      {/* pizza menu items */}

      <MenuCategory
        items={pizza}
        coverImg={pizzaImg}
        heading={"PIZZA"}
        subheading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        title="pizza"
      ></MenuCategory>
      {/* salad menu items */}

      <MenuCategory
        items={salad}
        coverImg={saladImg}
        heading={"SALAD"}
        subheading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        title="salad"
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soup}
        coverImg={soupImg}
        heading={"SOUP"}
        subheading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        title="soup"
      ></MenuCategory>
    </div>
  );
};

export default Menu;
