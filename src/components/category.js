import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Category = () => {
  const buttonRight = () => {
    document.getElementById("scroll").scrollLeft += 200;
  };
  const buttonLeft = () => {
    document.getElementById("scroll").scrollLeft -= 200;
  };
  return (
    <section className="category-section">
      <Container>
        <Row>
          <Col>
            <h2>
              Browser Our Category
              <span className="primary-font block">Receipt</span>
            </h2>
          </Col>
        </Row>
        <div className="scrolling-wrapper">
          <div id="scroll" className="flex-container">
            <div className="flex-item light-green">
              <img src={require("../assets/images/item1.png")} />
              <span>Test</span>
              <span>Test</span>
            </div>
            <div className="flex-item light-blue">
              <img src={require("../assets/images/item2.png")} />
              <span>Test</span>
              <span>Test</span>
            </div>
            <div className="flex-item light-darkblue">
              <img src={require("../assets/images/item3.png")} />
              <span>Test</span>
              <span>Test</span>
            </div>
            <div className="flex-item light-pink">
              <img src={require("../assets/images/item4.png")} />
              <span>Test</span>
              <span>Test</span>
            </div>
            <div className="flex-item light-lightyellow">
              <img src={require("../assets/images/item5.png")} />
              <span>Test</span>
              <span>Test</span>
            </div>
            <div className="flex-item light-blue">
              <img src={require("../assets/images/item5.png")} />
              <span>Test</span>
              <span>Test</span>
            </div>
            <div className="flex-item light-pink">
              <img src={require("../assets/images/item4.png")} />
              <span>Test</span>
              <span>Test</span>
            </div>
            <div className="flex-item light-blue">
              <img src={require("../assets/images/item2.png")} />
              <span>Test</span>
              <span>Test</span>
            </div>
          </div>
        </div>

        <div className="btn-group right hide-on-mobile">
          <span className="btn-arrow" onClick={buttonLeft}>
            <box-icon
              name="chevron-left-circle"
              type="solid"
              color="#ffffff"
            ></box-icon>{" "}
            PREV
          </span>
          <span className="btn-arrow" onClick={buttonRight}>
            NEXT{" "}
            <box-icon
              name="chevron-right-circle"
              type="solid"
              color="#ffffff"
            ></box-icon>
          </span>
        </div>
      </Container>
    </section>
  );
};
export default Category;
