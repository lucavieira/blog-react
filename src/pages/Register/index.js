import React from "react";
import Body from "../../assets/styles/Body";
import Input from "../../assets/styles/Input";
import Container from "../../assets/styles/Container";
import Buttons from "../../assets/styles/Buttons";

const Register = () => {
    return (
        <>
            <Body className="bodyLogin">
                <Container className="containerRegister">
                    <h2>Register</h2>
                    <Input type="text" placeholder="Nome completo" className="login"></Input>
                    <Input type="email" placeholder="Email" className="login"></Input>
                    <Input type="password" placeholder="Your password" className="login"></Input>
                    <Input type="password" placeholder="Confirm password" className="login"></Input>
                    <Container className="containerButtons">
                        <a href="/">
                            <Buttons>Register</Buttons>
                        </a>
                        <a href="/">
                            <Buttons>Cancel</Buttons>
                        </a>
                    </Container>
                    <Container className="links">
                        <a href="/login">Login</a>
                    </Container>
                </Container>
            </Body>
        </>
    );
}

export default Register