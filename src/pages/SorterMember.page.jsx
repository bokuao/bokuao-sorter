import React, { useState } from "react";
import { Modal } from "flowbite-react";
import * as mainScript from "../js/members/main";
import { useScreenSize } from "../hooks";

const FooterAction = {
  Credit: "CREDIT",
  HowToPlay: "HOW TO PLAY",
  Contact: "CONTACT",
};

const MobileView = ({}) => {
  return (
    <div className="is-mobile sorter">
      <div className="left sort text">
        <p></p>
      </div>
      <img src="./assets/defaultL.jpg" className="left sort image" />
      <div
        className="starting start button"
        onClick={() => {
          mainScript.init_member();
          mainScript.init_member();
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

      <img src="/bokuao-sorter/assets/defaultR.jpg" className="right sort image" />

      <div className="right sort text">
        <p></p>
      </div>
    </div>
  );
};

const LaptopView = ({}) => {
  return (
    <div className="sorter ">
      <img src="/assets/defaultL.jpg" className="left sort image" />
      <div
        className="starting start button"
        onClick={() => {
          mainScript.init_member();
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

      <img src="/assets/defaultR.jpg" className="right sort image" />

      <div className="left sort text">
        <p></p>
      </div>
      <div className="right sort text">
        <p></p>
      </div>
    </div>
  );
};

const SorterMemberPage = ({}) => {
  const screenSize = useScreenSize();
  const [settledFooterAction, setFooterAction] = useState("");

  const onClickFooterAction = (action) => {
    setFooterAction(action);
  };

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

          {screenSize.width < 1024 ? <MobileView /> : <LaptopView />}

          <div className="options"></div>
          <div className="image selector">Display Images on Result:</div>
          <div className="time taken"></div>
          <div className="results"></div>

          <div className="info"></div>

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
                      <a
                        target="blank"
                        href="http://mainyan.sakura.ne.jp/thsort.html"
                      >
                        {" "}
                        this site
                      </a>
                      .
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Source code from
                      <a
                        target="blank"
                        href="https://github.com/execfera/charasort/"
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
                    <p>
                      Click on the character you like better from the two, or
                      tie them if you like them equally or don't know them.
                    </p>
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

export default SorterMemberPage;
