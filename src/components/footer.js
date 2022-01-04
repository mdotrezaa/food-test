import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const Footer = (props) => {
  return (
    <Container>
      <footer>
        <Row>
          <Col md={4}>
            <div className='footer-col-1'>
              <div className='brand'>
                <img src={require("../assets/images/logo.png")} />
              </div>
              <p>
                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
                Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                12950
              </p>
              <div className='icon'>
                <span>
                  <box-icon name='envelope'></box-icon>
                </span>
                <span>
                  <box-icon name='phone'></box-icon>
                </span>
                <span>
                  <box-icon name='instagram' type='logo'></box-icon>
                </span>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className='footer-col-2'>
              <div className='title'>Categories</div>
              <div className='list'>
                <span>Cupcake</span>
                <span>Pizza</span>
                <span>Kebab</span>
                <span>Salmon</span>
                <span>Dougnut</span>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className='footer-col-3'>
              <div className='title'>About Us</div>
              <div className='list'>
                <span>About Us</span>
                <span>FAQ</span>
                <span>Report Problem</span>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className='footer-col-4'>
              <div className='title'>Newsletter</div>
              <div className='list'>
                <p>
                  Get now free 50% discount for alll products on your first
                  order
                </p>
                <InputGroup>
                  <FormControl
                    type='text'
                    placeholder='Your email address'
                    aria-label='Input group example'
                    aria-describedby='btnGroupAddon2'
                  />
                  <InputGroup.Text id='btnGroupAddon2'>Send</InputGroup.Text>
                </InputGroup>
                <span>
                  <box-icon name='envelope'></box-icon> elemesid@gmail.com
                </span>
                <span>
                  <box-icon name='phone'></box-icon> 0888 1111 2222
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};
export default Footer;
