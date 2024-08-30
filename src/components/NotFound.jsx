import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="row pt-5">
      <div className="col-md-6 offset-md-3 text-center">
        <img  className="imagen404" src="../img/404.png" alt="" />
        <h1 className="text-center">Página no encontrada</h1>
        <Link to="login" className="btn btn-success">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
