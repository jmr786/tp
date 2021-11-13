import React from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";
import { Container } from "react-bootstrap";
import MenuUser from "../Components/MenuUser";
import Footer from "../Components/Footer";
import RegisterPage from "../Pages/RegisterPage";
import AltaProductoPage from "../Pages/AltaProductoPage";
function User() {
 

  return (
    <>
      <Container fluid="md">
        
          <Routes>
          
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/logged/altaproducto" element={<AltaProductoPage/>} />
            <Route path="/" element={<HomePage />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
       
      </Container>
      <Footer />
    </>
  );
}
export default User;
