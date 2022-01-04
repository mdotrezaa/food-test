import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Rating = ({ rating }) => {
  return (
    <div className='rate'>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <span className={ratingValue > rating ? "clear-star" : "star"}></span>
        );
      })}
    </div>
  );
};
export default Rating;
