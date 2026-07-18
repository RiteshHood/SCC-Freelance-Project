import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import CoursesPage from "../Pages/CoursesPage.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRouter(){

    return(

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/courses" element={<CoursesPage />} />


            </Routes>

        </BrowserRouter>

    )

}