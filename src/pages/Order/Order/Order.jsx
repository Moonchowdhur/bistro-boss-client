import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import orderimg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../hooks/UseMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();

  const salad = menu.filter((food) => food.category === "salad");
  const pizza = menu.filter((food) => food.category === "pizza");
  const soup = menu.filter((food) => food.category === "soup");
  const dessert = menu.filter((food) => food.category === "dessert");
  const drinks = menu.filter((food) => food.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      {/* cover image */}
      <Cover
        img={orderimg}
        heading="ORDER FOOD"
        subheading="WOULD YOU LIKE TO TRY A DISH?"
      ></Cover>
      {/* tabs */}
      <div className="flex my-16 justify-center ">
        <div className="">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUP</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
            </TabList>
            {/* salad tab data */}
            <TabPanel>
              <OrderTabs items={salad}></OrderTabs>
            </TabPanel>
            {/* pizza tab data */}
            <TabPanel>
              <OrderTabs items={pizza}></OrderTabs>
            </TabPanel>
            {/* soup tab data */}
            <TabPanel>
              <OrderTabs items={soup}></OrderTabs>
            </TabPanel>
            {/* dessert tab data */}
            <TabPanel>
              <OrderTabs items={dessert}></OrderTabs>
            </TabPanel>
            {/* drinks tab data */}
            <TabPanel>
              <OrderTabs items={drinks}></OrderTabs>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Order;
