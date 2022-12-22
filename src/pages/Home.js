import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MyPage from "./MyPage";

function Home() {
  return (
    <MyPage showNavbar={true} showFooter={true}>
    <div class="colormain">
      <div class="Shadow container">
        <div class="container">
          <Row className="textArticle d-flex justify-content-center mt-5">
            <Col className="text-center" sm={8} md={8} lg={8}>
              <p class="h1">
                <strong>WHY DO YOU NEED OUR PROGRAM</strong>
              </p>
            </Col>
          </Row>
          <Row className="textDribniy d-flex justify-content-center mt-5">
            <Col sm={8} md={8} lg={8}>
              <p className="h5">
                The goal of our program is the artificial release of dopamine
                with the help of physical and arithmetical exercises. To develop
                the prefrontal cortex, we use simple and effective arithmetic
                examples. Based on an experiment conducted at Tohoku University,
                we selected the most effective exercises. In our program you
                will find problems that contain one unknown number, as well as
                magic squares and many other interesting exercises. You will
                also find physical exercises there that will help you keep your
                body in good shape. Exercise is one of the best activities for
                the brain and body.
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mt-5">
            <Col className="text-center">
              <Link to="/download">
                <button type="button" class="btn btn-outline-success">
                  {" "}
                  DOWNLOAD{" "}
                </button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    </MyPage>
  );
}

export default Home;
