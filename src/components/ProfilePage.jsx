import React, { useContext,useEffect  } from "react";

const ProfilePage = () => {

  return (
    <div className="row pt-5">
      <div className="col-md-6 offset-md-3">
        <form >
          <h1 className="h3 mb-3 fw-normal">Perfil de Usuario</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
             
          
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mt-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
  
            />
            <label>Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2 mt-4" type="submit">
            Modificar Perfil
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
