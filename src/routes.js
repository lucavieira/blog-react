import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes