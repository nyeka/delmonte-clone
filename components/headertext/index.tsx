import React from "react";

interface Iprops {
  heading: string;
  banner?: string;
  desc?: string;
}

const TextHeader = ({ heading, banner, desc }: Iprops) => {
  return (
    <div className="flex flex-col shadow-sm  p-[24px] items-center gap-[16px]">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-[34px] sm:text-[46px] font-medium">{heading}</h3>
        <span className="text-[#D9272D]">{banner}</span>
      </div>
      <p className="max-w-[600px] text-center">{desc}</p>
    </div>
  );
};

export default TextHeader;
