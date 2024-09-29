import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const ProfilePage = () => {
  const { profile, getProfile } = useContext(UserContext);
  useEffect(() => {
    const fetchProfile = async () => {
      await getProfile();
    };

    fetchProfile();
  }, [getProfile]); 

  return (
    <div className="row pt-5">
      <div className="col-md-6 offset-md-3">
        {profile && (
          <form>
            <h1 className="h3 mb-3 fw-normal">Perfil de Usuario</h1>

          
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="xxxxxxxxx"
                value={profile.id}
                disabled
              />
              <label>ID</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={profile.email}
                disabled
              />
              <label>Email</label>
            </div>
            

            <button className="btn btn-primary w-100 py-2 mt-4" type="submit">
              Modificar Perfil
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
