import React from "react";

import {BrowserRouter, Route, Routes} from "react-router";
import {AuthProvider} from "./context/auth.context.tsx";

import Header from "./components/UI/Header/Header.tsx";
import Footer from "./components/UI/Footer/Footer.tsx";

import Login from "./pages/Auth/Login/Login.tsx";
import Register from "./pages/Auth/Register/Register.tsx";
import Home from "./pages/Home/HomePage.tsx";
import DiscoverMoviesPage from "./pages/Movies/DiscoverMoviesPage.tsx";
import TrendingMoviesPage from "./pages/Movies/TrendingMoviesPage.tsx";

import './App.css'

const Root: React.FC = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/discover" element={<DiscoverMoviesPage/>}/>
                <Route path="/trending" element={<TrendingMoviesPage/>}/>
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
