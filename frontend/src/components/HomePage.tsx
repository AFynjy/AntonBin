import React from "react";
import PostForm from "./PostForm";
import { Col, Container, Row } from "react-bootstrap";
import PostList from "./PostList";
// @ts-ignore
import Cookies from "js-cookie";

const HomePage: React.FunctionComponent = () => {

  console.log(Cookies)

  return (
    <>
      <div className="wrapper">
        <div className="header-page">
          <h1>New Anton</h1>
        </div>
        <div className="container-3">
          <Container>
            <Row>
              <Col><PostForm /></Col>
              <Col className="text-post"><PostList /></Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HomePage;
