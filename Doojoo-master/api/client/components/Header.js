import React from "react";
import { Link, Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return !isAuth ? (
    <div className="showcase welcome">
      <nav className="header">
        <h1>Welcome to Dojo</h1>
        <h2>To start, create an account and have access to events. If you already have an account you can proceed to login.</h2>
        <Link to="/register">
          <button className="signup_btn">SIGN UP</button>
        </Link>
        <Link to="/login">
          <button className="signup_btn">LOGIN</button>
        </Link>
      </nav>
    </div>
  ) : (
    <Navigate to='/dashboard'/>
  )
}

export default Header;