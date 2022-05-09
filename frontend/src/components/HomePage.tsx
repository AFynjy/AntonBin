import React from "react";
import PostForm from "./PostForm";
import { Col, Container, Row } from "react-bootstrap";
import PostList from "./PostList";

const HomePage: React.FunctionComponent = () => {

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
