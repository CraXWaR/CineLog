import React from "react";

import {BrowserRouter, Route, Routes} from "react-router";

import Login from "./pages/Auth/Login/Login.tsx";
import Register from "./pages/Auth/Register/Register.tsx";

import './App.css'

const Root: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    )
}

export default App
