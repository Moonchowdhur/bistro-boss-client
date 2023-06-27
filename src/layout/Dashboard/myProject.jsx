import React from "react";
import { CgGym } from "react-icons/cg";

const App = () => {
  return (
    <div>
      <div className="bg-black h-full">
        <div
          style={{
            position: "relative",
            backgroundImage: "linear-gradient(to right, black, yellow)",
            background: `url("https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex pb-20 pt-7 h-[100vh] mx-20 my-6 bg-red-100 items-center justify-center"
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-red-500 to-lime-300 opacity-40 bg-no-repeat bg-cover"></div>
          <div className=" mt-20">
            <div className="bg-[#e2f80e] p-9 mt-20 -rotate-45 w-10/12 mx-10">
              <h2 className="text-5xl animate-bounce font-bold uppercase">
                Work <br /> Pays off
              </h2>
            </div>
            <div className="bg-[#e2f80e] p-9 mt-20 -rotate-45 w-10/12 mx-10">
              <h2 className="text-5xl font-bold  animate-bounce  uppercase">
                Feel Good
              </h2>
            </div>
            <div className="bg-[#e2f80e] flex gap-4 items-center  mt-20 -rotate-45 w-10/12 mx-10">
              <img
                src="https://i.ibb.co/RhWbTdV/Pilates-pana.png"
                className="w-[150px]   animate-pulse translate-x-6  "
                alt=""
              />
              <img
                src="https://i.ibb.co/vxWPVHm/Pilates-bro.png"
                className="w-[150px]  animate-bounce translate-x-6  "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
