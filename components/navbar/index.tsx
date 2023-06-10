import Image from "next/image";
import React from "react";

const Navbar = () => {
  const [color, setColor] = React.useState<String>("transparent");

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 200 ? "transparent" : "white";
      setColor(backgroundcolor);
    });
  }, [color]);

  return (
    <div
      className={`px-[24px] flex justify-between py-[12px] items-center shadow-sm  w-full fixed
          `}
      style={{
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        backgroundColor: color as string,
      }}
    >
      <div>
        <Image width={70} height={70} src={"/delmonte.svg"} alt="delmonte" />
      </div>
      <div className="flex gap-[32px]">
        <ul className="flex gap-[24px] font-[600] text-[18px]">
          <li>Products</li>
          <li>Recipes</li>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Partnership</li>
        </ul>
        <button className="bg-[#580AC7] px-[12px] rounded-[32px] text-[#fff]  text-center py-[7px]">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Navbar;
