import React, { useState, useRef, useEffect } from "react";
import { Modal } from "flowbite-react";
import { useScreenSize } from "../hooks";
import * as mainScript from "../js/songs/fnc_main_song";
import * as opScript from "../js/songs/op";

const FooterAction = {
  Credit: "CREDIT",
  HowToPlay: "HOW TO PLAY",
  Contact: "CONTACT",
};

const SorterSongPage = ({}) => {
  const [firstLoad, setFirstLoad] = useState(0);
  const [settledFooterAction, setFooterAction] = useState("");

  useEffect(() => {
    mainScript.startup();
  }, []);

  const onClickFooterAction = (action) => {
    setFooterAction(action);
  };

  return (
    <div>
      <div className="flex gap-5 justify-center">
        <div className="container">
          <div className="center">
            <div id="mainTable">
              <div className="tb_header">
                Battle No. <span id="lblCount">-</span>
                <br />
                <div id="GaGprog">
                  <div id="progressText">
                    <span id="lblProgress">0</span>% sorted.
                  </div>
                </div>
              </div>

              <div id="fldLeft" onClick={() => mainScript.fnc_Sort(-1)}>
                <div title="Left" />
              </div>
              <div id="texLeft" onClick={() => mainScript.fnc_Sort(-1)}>
                <span id="nameLeft"></span>
                <br />
                <span id="gameLeft"></span>
                <br />
                <br />
                <span id="detailLeft"></span>
              </div>

              <div id="middle-actions-run">
                <div id="fldMiddleB" onClick={() => mainScript.fnc_Undo()}>
                  Click to start!
                </div>
                <div
                  id="fldMiddleS"
                  className="inactive"
                  onClick={() => mainScript.fnc_Save()}
                >
                  Save Progress
                </div>
                <div
                  id="fldMiddleL"
                  className="inactive"
                  onClick={() => mainScript.fnc_Load()}
                >
                  Load Progress
                </div>
              </div>
              <div id="middle-actions-end">
                Completed, scroll to bottom for the result, and refresh/reload
                for play again!
              </div>

              <div id="fldRight" onClick={() => mainScript.fnc_Sort(1)}>
                <div title="Right" />
              </div>
              <div id="texRight" onClick={() => mainScript.fnc_Sort(1)}>
                <span id="nameRight"></span>
                <br />
                <span id="gameRight"></span>
                <br />
                <br />
                <span id="detailRight"></span>
              </div>
            </div>

            <div style={{ visibility: "hidden", height: "10px" }}>
              <div className="center">
                <input
                  id="optArrange"
                  checked="checked"
                  readOnly
                  type="checkbox"
                />
                <span className="tb_lower">
                  <label htmlFor="optArrange">Include arranges</label> (uncheck
                  to only include original songs).
                </span>
              </div>
              <div className="center">
                <input
                  id="optImage"
                  checked="checked"
                  readOnly
                  type="checkbox"
                />
                <span className="tb_lower">
                  <label htmlFor="optImage">Embed videos while sorting</label>{" "}
                  (warning: may be slow on some computers!)
                </span>
              </div>
              <div className="center">
                <label className="tb_lower" htmlFor="optSortType">
                  Sort:
                </label>
                <select name="optSortType" id="optSortType" value="0" readOnly>
                  <option value="0">Everything</option>
                  <option value="1">Only Boss themes and Stage themes</option>
                  <option value="2">Only Boss themes</option>
                  <option value="3">Only Stage themes</option>
                </select>
              </div>
              <div id="fldMiddleT" onClick={() => mainScript.fnc_Sort(0)}>
                <p>Touhou</p>
                <p>Song Sort</p>
              </div>
            </div>
          </div>
          <br />

          <div id="optSelectList"></div>
          <br />

          <div id="ranTable" className="tb" style={{ display: "none" }}>
            <form>
              <input
                value="Raw Text Results"
                onClick={() => opScript.OpenWnd()}
                type="button"
              />
              <input
                value="Switch Display Type"
                onClick={() => mainScript.fnc_ShowData()}
                type="button"
              />
              <p className="screenshot-info">
                Full screenshot: Firefox: Press Shift+F2, type in "screenshot
                --fullpage filename.png". <br />
                Chrome: Use the Screen Capture extension from the Chrome
                extensions webstore.
              </p>
            </form>
          </div>

          <div className="bottom-text" id="resultField"></div>

          <div className="flex gap-3">
            <span
              className="cursor-pointer"
              onClick={() => onClickFooterAction(FooterAction.Credit)}
            >
              {FooterAction.Credit}
            </span>
            <span>|</span>
            <span
              className="cursor-pointer"
              onClick={() => onClickFooterAction(FooterAction.HowToPlay)}
            >
              {FooterAction.HowToPlay}
            </span>
            <span>|</span>
            <span
              className="cursor-pointer"
              onClick={() => onClickFooterAction(FooterAction.Contact)}
            >
              {FooterAction.Contact}
            </span>
          </div>

          <Modal
            show={!!settledFooterAction}
            onClose={() => setFooterAction("")}
            position={"bottom-center"}
            className="mobile:pt-[50%] laptop:pt-[10%]"
          >
            <Modal.Header>{settledFooterAction}</Modal.Header>
            <Modal.Body className="pt-0">
              <div className="space-y-6">
                {settledFooterAction == FooterAction.Credit && (
                  <div>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Inspired by
                      <a target="blank" href="https://kasha.dev/">
                        {" "}
                        this site
                      </a>
                      .
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Source code from
                      <a
                        target="blank"
                        href="https://github.com/relick/touhou-song-sorter"
                      >
                        {" "}
                        this repo
                      </a>
                      .
                    </p>
                  </div>
                )}

                {settledFooterAction == FooterAction.HowToPlay && (
                  <div>
                    <p>Click on the song you like better from the two</p>
                  </div>
                )}

                {settledFooterAction == FooterAction.Contact && (
                  <div>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Contact me on X
                      <a target="blank" href="https://x.com/ShiroSengkuni">
                        {" "}
                        @ShiroSengkuni
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SorterSongPage;
