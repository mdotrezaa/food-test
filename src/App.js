import { Container, Row, Col } from "react-bootstrap";
import Category from "./components/category";
import Footer from "./components/footer";
import Header from "./components/header";
import ProductList from "./components/productList";
import Rating from "./components/rating";

function App() {
  return (
    <div className='App'>
      <div className='hero'>
        <Container>
          <Header />
          <div className='heading'>
            <Row>
              <Col md={6} xs={12}>
                <div className='heading-text'>
                  <h1>Good Food Us Good Mood</h1>
                  <p>
                    I would think that conserving our natural resources should
                    be a conservative position: Not to waste food, and not to
                    throw away a lot of the food that we buy.
                  </p>
                  <div className='btn-group'>
                    <span className='btn-primary'>Daftar Sekarang</span>
                    <span className='btn-grey'>About Us</span>
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className='heading-image'>
                  <img
                    className='grey-plate'
                    src={require("./assets/images/grey-plate.png")}
                  />
                  <img
                    className='big-plate'
                    src={require("./assets/images/plate.png")}
                  />
                  <div className='card-plate'>
                    <div className='card-block'>
                      <img src={require("./assets/images/plate.png")} />
                      <div className='card-text'>
                        <h5>Green Salad Tomato</h5>
                        <span className='category'>Tomatos</span>
                        <Rating rating={4} />
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
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
