import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rating from "./rating";

const products = [
  {
    id: 1,
    title: "pizza paperoni",
    category: "pizza",
    image: "1.png",
    star: 4,
  },
  {
    id: 2,
    title: "pizza meat",
    category: "pizza",
    image: "2.png",
    star: 4,
  },
  {
    id: 3,
    title: "doner kebab",
    category: "kebab",
    image: "3.png",
    star: 5,
  },
  {
    id: 4,
    title: "salmon roll",
    category: "salmon",
    image: "4.png",
    star: 4,
  },
  {
    id: 5,
    title: "cupcake choco",
    category: "cupcake",
    image: "5.png",
    star: 4,
  },
  {
    id: 6,
    title: "doughnut milk",
    category: "doughnut",
    image: "6.png",
    star: 5,
  },
  {
    id: 7,
    title: "doughnut unicorn",
    category: "doughnut",
    image: "7.png",
    star: 4,
  },
  {
    id: 8,
    title: "kathi kebab",
    category: "kebab",
    image: "8.png",
    star: 4,
  },
  {
    id: 9,
    title: "doughnut milk",
    category: "doughnut",
    image: "6.png",
    star: 4,
  },
  {
    id: 10,
    title: "cupcake choco",
    category: "cupcake",
    image: "5.png",
    star: 4,
  },
  {
    id: 11,
    title: "pizza meat",
    category: "pizza",
    image: "2.png",
    star: 4,
  },
  {
    id: 12,
    title: "doner kebab",
    category: "kebab",
    image: "3.png",
    star: 5,
  },
];
const ProductList = (props) => {
  const [more, setMore] = useState(8);

  const handleClick = () => {
    setMore(!more);
  };
  return (
    <section className='product-section'>
      <Container>
        <Row>
          <Col>
            <h2>
              Browser Our Trending
              <span className='primary-font block'>Receipt</span>
            </h2>
          </Col>
        </Row>
        <div className='product-wrapper'>
          <Row>
            {products.slice(0, more ? 99 : 8).map((item) => (
              <Col md={3} xs={12}>
                <div className={`product-item ${item.category}`}>
                  <img src={require(`../assets/images/items/${item.image}`)} />
                  <span className='title'>{item.title}</span>
                  <span className='category'>{item.category}</span>
                  <Rating rating={item.star} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className='btn-group center'>
          <span className='btn-primary' onClick={handleClick}>
            {more ? "Show less" : "ALL Receipt"}
          </span>
        </div>
      </Container>
    </section>
  );
};
export default ProductList;
