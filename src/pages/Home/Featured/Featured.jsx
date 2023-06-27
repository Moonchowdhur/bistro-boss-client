import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import feature from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="pt-10 my-20  featured  text-white bg-fixed ">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subheading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex bg-black bg-opacity-30 md:px-36 pb-20 pt-12 items-center gap-7">
        <div>
          <img src={feature} alt="" />
        </div>
        <div className="">
          <h2>March 20, 2023</h2>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur
          </p>
          <button className="btn btn-outline border-l-0 border-r-0 text-white border-t-0 border-2 border-b-black my-4 uppercase">
            {/* <button className="btn btn-outline text-white border-0 p-3 border-b-4 my-4"> */}
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
