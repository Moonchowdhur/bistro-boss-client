import React from "react";
import "./bistro.css";
const Bistro = () => {
  return (
    <div className="bistro bg-opacity-20 h-[80vh] bg-no-repeat bg-cover bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div className="flex justify-center items-center  h-full">
        <div className="mx-auto w-7/12 my-20  text-center bg-white p-9">
          <h2 className="my-4  text-2xl tracking-widest uppercase">
            Bistro Boss
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sit
            reiciendis et? Dolorem praesentium et saepe quidem eius autem
            asperiores amet ipsum, porro iusto fugit ducimus dolores quae
            cupiditate distinctio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bistro;
