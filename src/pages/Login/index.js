import React from "react";
import Body from "../../assets/styles/Body";
import Input from "../../assets/styles/Input";
import Container from "../../assets/styles/Container";
import Buttons from "../../assets/styles/Buttons";

const Login = () => {
    return (
        <>
            <Body className="bodyLogin">
                <Container className="containerLogin">
                    <h2>Login</h2>
                    <Input type="email" placeholder="Email" className="login"></Input>
                    <Input type="password" placeholder="Your password" className="login"></Input>
                    <Container className="containerButtons">
                        <a href="/">
                            <Buttons>Sign in</Buttons>
                        </a>
                        <a href="/">
                            <Buttons>Cancel</Buttons>
                        </a>
                    </Container>
                    <Container className="links">
                        <a href="/register">Register now</a>
                        <a href="/">Forgot password?</a>
                    </Container>
                </Container>
            </Body>
        </>
    );
}

export default Login