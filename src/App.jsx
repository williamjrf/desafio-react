import "./App.css";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import Cart from "./components/Cart";
import CardPizza from "./components/CardPizza";

import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import ProfilePage from "./components/ProfilePage";

const App = () => {
const {token}=useContext(UserContext);
  return (
    <>
          <Navbar />
          <br />
          <Routes>
            <Route path="/" element={token?<HomePage />:<Navigate to="/login"/> }/>
            <Route path="/home" element={token?<HomePage />:<Navigate to="/login"/> } />
            <Route path="/login" element=  {!token? <LoginPage />: <Navigate to="/home"/>  } />
            <Route path="/register" element={!token? <RegisterPage />: <Navigate to="/home"/>  } />
            <Route path="/profile" element={token?<ProfilePage />:<Navigate to="/login"/> } />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/pizza/:id" element={<CardPizza />} />
          </Routes>
          <Footer />
    </>
  );
};

export default App;
