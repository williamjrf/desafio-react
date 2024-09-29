import React, { useState } from "react";
export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  //const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [profile, setProfile] = useState({});
  const [errorRegister, setErrorRegister] = useState("");

  const login = async () => {
    console.log("paso por login");
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer token_jwt`,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const responseLogin = await response.json();
    console.log("responseLogin", responseLogin);
    console.log("statuscode", response.status);

    if (response.status == 200) {
      setToken(responseLogin.token);
    } else {
      setErrorLogin(responseLogin.error);
      setToken("");
    }
  };

  const registerUser = async () => {
    console.log("paso por register");
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer token_jwt`,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const responseRegister = await response.json();
    console.log("responseRegister", responseRegister);
    console.log("statuscode", response.status);
    debugger;
    if (response.status == 200) {
      setToken(responseRegister.token);
      
    } else {
    setErrorRegister(responseRegister.error);
      setToken("");
    }
  };

  const getProfile = async () => {
    const response = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const responseProfile = await response.json();
    if (response.status == 200) {
      console.log("responseProfile OK", responseProfile);
      setProfile(responseProfile);
    } else {
      console.log("responseProfile ERROR", responseProfile);
      setProfile({});
    }
  };

  const logout = () => {
    console.log("paso por logout");
    setEmail("");
    setPassword("");
    setToken("");
  };

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        token,
        errorLogin,
        setErrorLogin,
        login,
        logout,
        getProfile,
        profile,
        errorRegister,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
