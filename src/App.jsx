import "./App.css";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import Cart from "./components/Cart";
import CardPizza from "./components/CardPizza";
import CartContextProvider from "./context/CartContext";
const App = () => {
  return (
    <>
      <CartContextProvider>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/pizza/:id" element={<CardPizza />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </>
  );
};

export default App;
