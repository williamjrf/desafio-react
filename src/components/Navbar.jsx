import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, pizza) => sum + pizza.item.price * pizza.counter, 0);
  const countPizzaCart = cart.reduce((sum, pizza) => sum + pizza.counter, 0);
  const {token,logout} = useContext(UserContext);
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mamma Mia!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  <i className="fas fa-pizza-slice" /> &nbsp; Home
                </Link>
              </li>

              {token && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link " to="/profile">
                      <i className="fa fa-lock" />
                      &nbsp; Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page"  onClick={()=>{logout()}}>
                      <i className="fa fa-lock" />
                      &nbsp; Logout
                    </a>
                  </li>
                </>
              )}

              {!token && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link " to="/login">
                      <i className="fa fa-lock" /> Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/register">
                      <i className="fa fa-lock" />
                      &nbsp; Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex" role="">
              <Link className="nav-link " to="/cart">
                <button className="btn btn-outline-primary" type="button">
                  <i className="fa fa-shopping-cart" /> &nbsp; ({countPizzaCart}) Total ${" "}
                  {total.toLocaleString("es-CL")}
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
