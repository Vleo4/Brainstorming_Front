import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "..//styles/PageNotFound.css";

import MyPage from "./MyPage";

function PageNotFound() {
  return (
    <MyPage showNavbar={true} showFooter={true}>
    <div class="colormain">
      <div class="Shadow container">
        <div class="NotFound minicontainer">
          <Row className="textArticle d-flex justify-content-center">
            <Col className="text-center" sm={8} md={8} lg={8}>
              <p class="h1" href="#action/3.1">
                <strong>
                  {" "}
                  404 <br></br>UH OH! You are lost.
                </strong>
              </p>
            </Col>
          </Row>
          <Row className="textDribniy d-flex justify-content-center mt-4">
            <Col sm={8} md={8} lg={8}>
              <p className="h5">
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mt-3">
            <Col className="text-center">
              <Link to="/">
                <button type="button" class="btn btn-outline-success">
                  {" "}
                  BACK TO HOME{" "}
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

export default PageNotFound;
