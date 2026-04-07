import React from "react";

import {BrowserRouter, Route, Routes} from "react-router";

import Header from "./components/UI/Header/Header.tsx";
import Footer from "./components/UI/Footer/Footer.tsx";

import Login from "./pages/Auth/Login/Login.tsx";
import Register from "./pages/Auth/Register/Register.tsx";
import Home from "./pages/Home/HomePage.tsx";
import Movies from "./pages/Movie/MoviesPage.tsx";

import './App.css'
import {AuthProvider} from "./context/auth.context.tsx";

const Root: React.FC = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/trending" element={<Movies/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Root/>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
