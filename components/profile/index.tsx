import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="sm:flex gap-[24px]">
      <Image src={"/twotik.svg"} alt="double Tik" width={80} height={80} />
      <div className="flex md:m-[24px] p-[12px] flex-col gap-[12px] justify-center">
        <h1>Our Story</h1>
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
      <img src={"/paprika.svg"} />
    </div>
  );
};

export default Profile;
