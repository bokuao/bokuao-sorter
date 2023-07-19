import React, { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/faviconV2.png";
import viteLogo from "/vite.svg";
import "./App.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkSide } from "../src/hooks";
import { Tabs, Flowbite, Dropdown } from "flowbite-react";
import theme from "../src/config/theme.config";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, SorterPage } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/sorter/member", element: <SorterPage /> },
]);

function App() {
  useEffect(() => {
    generateRandomBG();
  }, []);

  const generateRandomBG = () => {
    var totalCount = 3;
    var num = Math.ceil(Math.random() * totalCount);
    document.body.background = `src/assets/bg_0${num}.jpg`;
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
