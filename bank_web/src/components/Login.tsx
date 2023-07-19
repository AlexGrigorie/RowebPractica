import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ApiFetch from "../service/ApiCalls/request";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!username) {
      setUsernameError("Please enter a username");
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Please enter a password");
    } else {
      setPasswordError("");
    }

    if (username && password) {
      const response = await fetch(ApiFetch.loginUser, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("userToken", JSON.stringify(user.token));
        navigate("/coin/all");
      } else if (response.status === 401) {
        setPasswordError("Invalid username or password");
      }
    }
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-secondary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label className="text-center">
                          Your Name
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter name"
                          type="text"
                          isInvalid={!!usernameError}
                        />
                        {usernameError && (
                          <Form.Control.Feedback type="invalid">
                            {usernameError}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          isInvalid={!!passwordError}
                        />
                        {passwordError && (
                          <Form.Control.Feedback type="invalid">
                            {passwordError}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="secondary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>

                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-secondary fw-bold">
                          Register
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
