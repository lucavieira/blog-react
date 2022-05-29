import React from "react";
import Menu from "../assets/styles/Menu";

const Navbar = () => {
    return (
        <Menu>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/register">Register</a>
            </li>
        </Menu>
    );
}

export default Navbar