import React from "react";

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center md:w-4/12 mx-auto my-8 ">
      <p className="text-yellow-500  italic mb-3">--- {subheading} ---</p>
      <h2 className="uppercase text-3xl border-y-4 py-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
