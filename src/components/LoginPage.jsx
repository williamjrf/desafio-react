import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
const LoginPage = () => {
  const {
    login,
    email,
    setEmail,
    password,
    setPassword,
    errorLogin,
    setErrorLogin,
  } = useContext(UserContext);

  // Manejador de cambios para el email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorLogin("");
  };

  // Manejador de cambios para el password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorLogin("");
  };

  const handleSubmit = async (event) => {
    if (email.length == 0) {
      alert("El email es requerido");
      event.preventDefault();
    } else if (password.length == 0) {
      alert("El password es requerido");
      event.preventDefault();
    } else if (password.length <= 5) {
      alert("el password debe tener al menos 6 caracteres");
      event.preventDefault();
    } else {
      await login();
    }
  };

  return (
    <div className="row pt-5">
      <div className="col-md-6 offset-md-3">
        <form>
          <h1 className="h3 mb-3 fw-normal">Login</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mt-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label>Password</label>
          </div>

          <button
            className="btn btn-primary w-100 py-2 mt-4"
            type="button"
            onClick={handleSubmit}
          >
            Iniciar Sesión
          </button>

          <br />
          {errorLogin.length>0 && <p className="text-danger">{errorLogin} </p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
