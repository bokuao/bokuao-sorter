import React, { useState, useRef, useEffect } from "react";
import { Tabs, Flowbite, Dropdown } from "flowbite-react";
import Cloud2 from "../assets/cloud_s02.png";
import { redirect, useNavigate } from "react-router-dom";
import { useScreenSize } from "../hooks";

const HomePage = ({}) => {
  const _navigate = useNavigate();
  const screenSize = useScreenSize();

  return (
    <div>
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="font-mono text-white drop-shadow-md mobile:text-9xl">
          BokuAo Playground
        </h1>
      </div>
      <div className="flex laptop:flex-row mobile:flex-col items-center justify-center gap-6">
        <div
          className={`relative flex justify-center cursor-pointer mt-9 ${
            screenSize.width < 1024 ? "cloud-move-x1" : "cloud-move-y1"
          }`}
          onClick={() => {
            _navigate("/sorter/member");
          }}
        >
          <img src={Cloud2} className="laptop:w-[200px] mobile:w-[400px]" />
          <p className="absolute font-mono text-blue-400 font-extrabold bottom-[28%] mobile:text-4xl">
            Member<br></br>Sorter
          </p>
        </div>
        <div
          className={`relative flex justify-center cursor-pointer mt-9 ${
            screenSize.width < 1024 ? "cloud-move-x2" : "cloud-move-y2"
          }`}
          onClick={() => {
            _navigate("/sorter/song");
          }}
        >
          <img src={Cloud2} className="laptop:w-[200px] mobile:w-[400px]" />
          <p className="absolute font-mono text-blue-400 font-extrabold bottom-[28%] mobile:text-4xl">
            Song<br></br>Sorter
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
