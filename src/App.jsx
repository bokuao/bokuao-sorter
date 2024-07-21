import React, { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/faviconV2.png";
import viteLogo from "/vite.svg";
import "./App.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkSide } from "../src/hooks";
import { Tabs, Flowbite, Dropdown } from "flowbite-react";
import theme from "../src/config/theme.config";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HomePage, SorterMember, SorterSong } from "./pages";
import bg1 from "./assets/bg_01.jpg";
import bg2 from "./assets/bg_02.jpg";
import bg3 from "./assets/bg_03.jpg";

const router = createHashRouter([
  { path: "/", element: <HomePage /> },
  { path: "/sorter/member", element: <SorterMember /> },
  { path: "/sorter/song", element: <SorterSong /> },
]);

function App() {
  useEffect(() => {
    generateRandomBG();
  }, []);

  const generateRandomBG = () => {
    var totalCount = 3;
    const arrImg = [bg1, bg2, bg3];
    var num = Math.ceil(Math.random() * totalCount);
    document.body.background = arrImg[num - 1];
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  };

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
