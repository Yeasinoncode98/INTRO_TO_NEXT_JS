import React from "react";

const Title = ({ children }) => {
  return (
    <div className="bg-linear-60 from-sky-50 to sky-200 p-3 rounded text-black">
      <h2 className="text-4xl font-bold">{children}</h2>
    </div>
  );
};

export default Title;
