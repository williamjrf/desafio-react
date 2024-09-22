import React, { useState } from "react";
export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState(true);

  const login = () => {
    console.log("paso por login");
    setToken(true);
  };

  const logout = () => {
    console.log("paso por logout");
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ user, setUser, token,login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
