import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../Style/Login.css';
import { Button, Container, Form, Row, Col } from "react-bootstrap";

export default function Login() {
    return(
        <>
        <Form>
            <h3>Log in</h3>
            <div className="form-group">
                <label>Email :</label>
                <input type="email" className="form-control" placeholder="Enter your email.." />
            </div>
            <div className="form-group">
                <label>Password :</label>
                <input type="password" className="form-control" placeholder="Enter your password.." />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="custom-control" />
                    <label className="custom-control-label" htmlFor="custom-control">Remember me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password ?</a>
            </p>
        </Form>
        </>
    );
}