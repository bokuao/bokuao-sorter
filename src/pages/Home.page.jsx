import React, { useState, useRef, useEffect } from "react";
import { Tabs, Flowbite, Dropdown } from "flowbite-react";
import Cloud2 from "../assets/cloud_s02.png";
import { redirect, useNavigate } from "react-router-dom";

const SorterPage = ({}) => {
  const _navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="font-mono text-white drop-shadow-md mobile:text-8xl">
          Boku Ao Playground
        </h1>
      </div>
      <div
        className="relative flex justify-center cursor-pointer"
        onClick={() => {
          _navigate("/sorter/member");
        }}
      >
        <img src={Cloud2} className="w-[200px]" />
        <p className="absolute font-mono text-blue-400 font-extrabold bottom-[28%]">
          Member<br></br>Sorter
        </p>
      </div>
    </div>
  );
};

export default SorterPage;
