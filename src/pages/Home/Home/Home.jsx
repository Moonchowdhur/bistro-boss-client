import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testomonials from "./Testomonials/Testomonials";
import Bistro from "../Bistro/Bistro";
import Contact from "./Contact/Contact";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home-page ${isDarkMode ? "dark" : "light"}`}>
      <Navbar isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
      <div>
        <Helmet>
          <title>Bistro Boss | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category></Category>
        <Bistro></Bistro>
        <PopularMenu></PopularMenu>
        <Contact></Contact>
        <Featured></Featured>
        <Testomonials></Testomonials>
      </div>
      {/* Rest of your home page content */}
    </div>
  );
};

export default Home;
