import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, heading, subheading }) => {
  return (
    <>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="our menu"
        strength={-200}
      >
        <div className="hero mb-20 h-[80vh]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" bg-black px-40 py-20 bg-opacity-30">
              <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
              <p className="mb-5 uppercase  tracking-wider ">{subheading}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Cover;
