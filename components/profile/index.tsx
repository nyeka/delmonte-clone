import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

const Profile = () => {
  return (
    <div className="sm:flex gap-[24px]">
      <Image
        src={"/twotik.svg"}
        alt="double Tik"
        width={80}
        height={80}
        className="hidden sm:flex"
      />
      <div className="flex md:m-[24px] p-[12px] flex-col gap-[12px] justify-center">
        <h1 className="text-[34px] sm:text-[44px] font-medium text-center sm:text-left">
          Our Story
        </h1>
        <div className="flex flex-col gap-[24px]">
          <p>
            Our 135 year history is as rich and vibrant as our products. As The
            Original Plant-Based Food Company, we have been cultivators and
            innovators of nutritious produce and recipes for families across
            America.
          </p>
          <button className="bg-[#580AC7] w-fit px-[14px] rounded-[32px] text-[#fff]  text-center py-[9px]">
            See our Profile Company
          </button>
        </div>
      </div>
      <img src={"/paprika.svg"} />
    </div>
  );
};

export default Profile;
