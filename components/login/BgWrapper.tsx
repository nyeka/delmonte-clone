import { Text } from "@mantine/core";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const BgWrapper = ({ children }: IProps) => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-[#F1F5F9] flex-col">
      {children}
    </div>
  );
};

export default BgWrapper;
