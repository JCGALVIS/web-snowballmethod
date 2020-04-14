//Dependencias
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>
          <h2>Login</h2>

          <div>
              <label>Email</label>
              <input
                type="text"
                placeholder="Ingrese email"
              />
          </div>

          <div>
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
              />
          </div>

          <input
            type="submit"
            value="Ingresar"
          />
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default Login;
