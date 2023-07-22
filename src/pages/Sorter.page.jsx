import React, { useState, useRef, useEffect } from "react";
import { Tabs, Flowbite, Dropdown } from "flowbite-react";
import * as mainScript from "../js/main";

const SorterPage = ({}) => {
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "../src/js/data.js";
  //   script.async = true;

  //   document.head.appendChild(script);

  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

  return (
    <div>
      <div className="flex gap-5 justify-center">
        <div className="container">
          <div className="progress">
            <span className="progressbattle"></span>
            <div className="progressbar">
              <div className="progressfill">
                <span className="progresstext"></span>
              </div>
            </div>
          </div>

          <div className="sorter">
            <img src="../src/assets/defaultL.jpg" className="left sort image" />

            <div
              className="starting start button"
              onClick={() => {
                mainScript.init();
                mainScript.start();
              }}
            >
              Boku Ga Mitakatta Aozora Members Sorter
              <br />
              <br />
              Click to Start!
            </div>
            <div className="starting load button">
              Load <span></span>
            </div>

            <div className="loading button">
              <div></div>
              <span>Loading...</span>
            </div>

            <div className="sorting tie button">Tie</div>
            <div className="sorting undo button">Undo</div>
            <div className="sorting save button">Save Progress</div>

            <div className="finished save button">Generate Result URL</div>
            <div className="finished getimg button">Generate Image</div>
            <div className="finished list button">Generate Text List</div>

            <img
              src="../src/assets/defaultR.jpg"
              className="right sort image"
            />

            <div className="left sort text">
              <p></p>
            </div>
            <div className="right sort text">
              <p></p>
            </div>
          </div>

          <div className="options"></div>
          <div className="image selector">Display Images on Result:</div>
          <div className="time taken"></div>
          <div className="results"></div>

          <div className="info">
            <a href="mailto:gatholocogandhul@gmail.com">Contact</a> |
            <a href="https://github.com/execfera/charasort/">Source Code</a> |
            <a className="clearsave">Clear Save Data</a>
            <br />
            <br />
            <p>
              Sorter for Boku Ga Mitakatta Aozora Members. Pick your sources,
              and hit the Start button.
            </p>
            <p>
              <strong>
                Certain options have details that you can hover to read.
              </strong>
            </p>
            <p>
              Click on the character you like better from the two, or tie them
              if you like them equally or don't know them.
            </p>
            <br />
            <br />
            <p>
              Keyboard controls during sorting: H/LeftArrow (pick left)
              J/DownArrow (undo) K/UpArrow (tie) L/RightArrow (pick right) S
              (save progress).
            </p>
            <p>Before sorting: S/Enter (start sorting) L (load progress).</p>
            <p>1/2/3 always correspond to the first/second/third buttons.</p>
            <br />
            <br />
            <p>
              Inspired by
              <a href="http://mainyan.sakura.ne.jp/thsort.html">this site</a>.
            </p>
            <br />
            <br />
            <p>20230716 - Added 1st Generation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SorterPage;
