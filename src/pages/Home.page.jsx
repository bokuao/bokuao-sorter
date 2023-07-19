import React, { useState, useRef, useEffect } from "react";
import { Tabs, Flowbite, Dropdown } from "flowbite-react";
import Cloud2 from "../assets/cloud_s02.png";

const SorterPage = ({}) => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="font-mono text-white">Boku Ao Member Sorter</h1>
        <div className="relative flex justify-center cursor-pointer">
          <img src={Cloud2} className="w-[200px]" />
          <p className="absolute font-mono text-blue-400 font-extrabold bottom-[28%]">
            Choose<br></br>Member
          </p>
        </div>
      </div>
    </div>
  );
};

export default SorterPage;
