import React from "react";

const HomePage = () => {
  return (
    <div
      className="h-[100vh] flex items-center"
      style={{
        background: "url(/bg.svg) no-repeat center center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col text-[#fff] shadow-sm gap-[16px] p-[24px] ">
        <div>
          <h3 className="text-[75px] md:text-[95px] font-[600] ">
            Fresh Cut Veggies
          </h3>
          <p className="max-w-[600px] md:text-[24px]">
            Your Favorites Recipe deserve High Quality, Flavorful vegetables,
            With No GMO Ingridients and no artificial colors or flavor
          </p>
        </div>
        <button className="bg-[#580AC7] rounded-[16px] w-[119px] h-[42px]">
          Try Today
        </button>
      </div>
    </div>
  );
};

export default HomePage;
