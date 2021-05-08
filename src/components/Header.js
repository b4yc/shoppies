import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <Container>
      <Row>
        <Image src={"shoppies-logo.png"} alt="logo"></Image>
      </Row>
    </Container>
  );
};

export default Header;
