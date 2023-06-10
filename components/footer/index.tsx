import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#7A54AE] p-[24px] text-white">
      <div className="sm:flex sm:justify-evenly">
        <div>
          <Image src={"/delmonte.svg"} alt="Icon" width={100} height={100} />
          <div className="flex flex-col gap-[12px] md:w-[400px]">
            <h1>Our Story</h1>
            <p className="text-[16px]">
              Throughout our rich history, the Del Monte name has always been a
              promise of quality products that you can rely on. We are
              innovators and cultivators of nutritious produce, paving the way
              for plant-based products. We’re proud to be The Original
              Plant-Based Food Company™, and proud to have earned our place at
              the table.
            </p>
          </div>
        </div>
        <div className="flex gap-[45px] mt-[40px]">
          <div>
            SiteMap
            <ul className="flex flex-col gap-[12px] mt-[24px]">
              <li>Vegietful</li>
              <li>Vegetables</li>
              <li>Where To Buy</li>
              <li>Snacks</li>
              <li>Fruits</li>
            </ul>
          </div>
          <div>
            Policy
            <ul className="flex flex-col gap-[12px] mt-[24px]">
              <li>Privacy Policy</li>
              <li>Accesbility</li>
              <li>Term Of Use</li>
              <li>Contact</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
