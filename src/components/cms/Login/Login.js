import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../Style/Login.css';
import { Button, Container, Form, Row, Col } from "react-bootstrap";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginSubmit(event) {
        event.preventDefault();
    }

    return(
        <>
        <Container>
            <Row className="row justify-content-md-center">
                <Col md={12}>
                    <div className="login-container">
                        <div className="login-container-content">
                            <div className="login-container-text-header">
                                Sign In
                            </div>
                            <Form onSubmit={loginSubmit}>
                                <Form.Group size="lg" controlId="email">
                                    <Form.Label>Email :</Form.Label>
                                    <Form.Control autofocus type="email" className="login-container-input" value={email} placeholder="youremail@email.com" onChange={ (e) => setEmail(e.target.value)} /> 
                                </Form.Group>
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label>Password :</Form.Label>
                                    <Form.Control autofocus type="password" className="login-container-input" value={password} placeholder="********" onChange={ (e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check aria-label="option 1" label="Remember password" /> 
                                </Form.Group>
                                <hr className="login-hr-class" />
                                <div className="d-grid gap-2">
                                    <Button className="login-container-button-login" block size="md" type="submit">
                                        LOGIN
                                    </Button>
                                    <div className="login-container-section-bottom">
                                        <div className="login-container-section-bottom-register">
                                            <span className="login-container-bottom-section-span">New user ?</span>
                                            <a href="#" type="button" >
                                                <span className="login-container-bottom-section-span-href">click here</span>
                                            </a>
                                        </div>
                                        <div className="login-container-section-bottom-forget">
                                            <span className="login-container-bottom-section-span">forgot your password ?</span>
                                            <a href="#" type="button" >
                                                <span className="login-container-bottom-section-span-href">click here</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        {/* <div className="login">
            <Form onSubmit={loginSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control autofocus type="email" value={email} placeholder="youremail@email.com" onChange={ (e) => setEmail(e.target.value)} /> 
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password :</Form.Label>
                    <Form.Control autofocus type="password" value={password} placeholder="********" onChange={ (e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    Forget Password ?
                </Form.Group>
                <Button block size="lg" type="submit">
                    Login
                </Button>
            </Form>
        </div> */}
        </>
    );
}