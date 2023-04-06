import React from "react";
import { Text } from "@mantine/core";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[60px] ">
      <div className="flex flex-col gap-[12px] items-center">
        <Text fw={700} fz="36px" color="#1C2434">
          Delmonte
        </Text>
        <p className="text-[#64748B] text-[16px] max-w-[362px] text-center">
          Lorem ipsum dolor sit amat, consectetur adipiscing elit suspendisse.
        </p>
      </div>
      <img src={"/login.svg"} alt={"login page"} />
    </div>
  );
};

export default Welcome;
