import React from "react";

const TextHeader = () => {
  return (
    <div className="flex flex-col shadow-sm  p-[24px] items-center gap-[16px]">
      <div className="flex flex-col items-center">
        <h3 className="text-[46px]">Our Products</h3>
        <span className="text-[#D9272D]">Delicious and premium taste</span>
      </div>
      <p className="max-w-[600px] text-center">
        We've been working with family farmers for generations to grow our
        delicious vegetables, fruits and tomatoes
      </p>
    </div>
  );
};

export default TextHeader;
