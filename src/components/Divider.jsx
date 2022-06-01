import React from "react";

const Divider = ({ width = "w-64", center = false } = {}) => {
  return (
    <div className={`w-full mb-4 ${!center ? "justify-start " : "justify-center"}`}>
      <div
        className={`h-1  ${
          center ? "mx-auto" : ""
        } bg-primary ${width} opacity-25 my-0 py-0 rounded-t mb-10`}
      ></div>
    </div>
  );
};

export default Divider;
