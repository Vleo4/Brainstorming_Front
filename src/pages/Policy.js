import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "..//styles/Policy.css";

import MyPage from "./MyPage";

function Policy() {
  return (
    <MyPage showNavbar={false} showFooter={false}>
     
      <div className="Policia minicontainer">     
      <Row className="textDribniy d-flex justify-content-center mt-4">
          <Col sm={8} md={8} lg={8}>
            <p className="h5">
              We care about the privacy of visitors to our app and website. When
              processing your Personal Data, we act in accordance with the Law
              of Ukraine "On Personal Data Protection" and the EU General Data
              Protection Regulation (Regulation (UE) 2016 /6o79r "GDPR").
              <br></br>
              <br></br>
              We do not currently collect and process your data
            </p>
          </Col>
        </Row>
      </div>
    
    </MyPage>
  );
}

export default Policy;
