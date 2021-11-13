import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "../Pages/LoginPage";

import NotFound from "../Pages/NotFound";
import { Container } from "react-bootstrap";

import Footer from "../Components/Footer";
import RegisterPage from "../Pages/RegisterPage";
import LogedPage from "../Pages/LogedPage";
import AltaProductoPage from "../Pages/AltaProductoPage";
import ListaProductoPage from "../Pages/ListaProductoPage";
import DetalleProductoPage from "../Pages/DetalleProductoPage";
function Public() {
  return (
    <>
      <Container fluid="md">
        <div className="bg-">
          <Routes>
          <Route path="/logged/listaproductos" element={<ListaProductoPage />} />
            <Route path="/logged/altaproducto" element={<AltaProductoPage />} />
            <Route path="/logged/producto/:id" element={<DetalleProductoPage />} />
            <Route path="/logged" element={<LogedPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LoginPage />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Container>
    
    </>
  );
}
export default Public;
