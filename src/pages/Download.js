import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "..//styles/Download.css";
import { BsWindows } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { saveAs } from "file-saver";

import MyPage from "./MyPage";

function Download() {
  const saveFile = () => {
    saveAs(
      "https://brainstormingapplication.com/Brainstorming.exe",
      "Brainstorming.exe"
    );
  };

  return (
    <MyPage showNavbar={true} showFooter={true}>
    <div class="colormain">
      <div class="Shadow container">
        <div className="minicontainer">
          <Row className="textArticle d-flex justify-content-center mt-1">
            <Col className="text-center">
              <p class="h1">
                <strong>DOWNLOAD FOR WINDOWS</strong>
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="text-center">
              <button
                onClick={saveFile}
                type="button"
                class="Downloadbutton btn btn-outline-success"
              >
                <BsWindows className="Icons" /> DOWNLOAD
              </button>
            </Col>
          </Row>
          <Row className="Version textDribniy d-flex justify-content-center">
            <Col className="text-center">
              <p className="h5 p-3">VERSION 1.1</p>
            </Col>
          </Row>
          <Row className="textArticle d-flex justify-content-center mt-1">
            <Col className="text-center">
              <p class="h1">
                <strong>DOWNLOAD FOR ANDROID</strong>
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="text-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.satonteam.brainstorming"
                target="blank"
              >
                <button
                  type="button"
                  class="Downloadbutton btn btn-outline-success"
                >
                  <FaAndroid className="Icons" /> DOWNLOAD
                </button>
              </a>
            </Col>
          </Row>
          <Row className="Version textDribniy d-flex justify-content-center">
            <Col className="text-center">
              <p className="h5 p-3">VERSION 1.1</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    </MyPage>
  );
}

export default Download;
