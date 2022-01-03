import { Container, Row, Col } from "react-bootstrap";
import Category from "./components/category";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <Container>
          <header>
            <div className="brand">
              <img src={require("./assets/images/logo.png")} />
            </div>
            <div className="nav hide-on-mobile">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Promotions</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="btn-group">
              <span className="btn-clear">Masuk</span>
              <span className="btn-primary">Daftar Sekarang</span>
            </div>
          </header>
          <div className="heading">
            <Row>
              <Col md={6} xs={12}>
                <div className="heading-text">
                  <h1>Good Food Us Good Mood</h1>
                  <p>
                    I would think that conserving our natural resources should
                    be a conservative position: Not to waste food, and not to
                    throw away a lot of the food that we buy.
                  </p>
                  <div className="btn-group">
                    <span className="btn-primary">Daftar Sekarang</span>
                    <span className="btn-grey">About Us</span>
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className="heading-image">
                  <img
                    className="grey-plate"
                    src={require("./assets/images/grey-plate.png")}
                  />
                  <img
                    className="big-plate"
                    src={require("./assets/images/plate.png")}
                  />
                  <div className="card-plate">
                    <div className="card-block">
                      <img src={require("./assets/images/plate.png")} />
                      <div className="card-text">
                        <h5>Green Salad Tomato</h5>
                        <span className="category">Tomatos</span>
                        <div className="rate">
                          <span className="star"></span>
                          <span className="star"></span>
                          <span className="star"></span>
                          <span className="star"></span>
                          <span className="clear-star"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Category />
    </div>
  );
}

export default App;
