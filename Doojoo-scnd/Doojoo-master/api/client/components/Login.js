import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { useDispatch } from 'react-redux';
import { LoginSuccess, LoginError } from '../store/actions/authAction';

const Login = ({ nav }) => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [result, setResult] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    axios
      .post("/api/account/login/", { email: email, pass: pass })
      .then((response) => {
        if (response.status === 200) {
          setResult("");
          localStorage.setItem("user",response.data);
          setIsLogedIn(true);
        } else if (response.status === 202) {
          setResult("Incorect Password!");
        }
        else {
          setResult("User Not Found!");
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    if (isLogedIn) {
      axios.get('api/account/home')
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            dispatch(LoginSuccess())
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          console.log(err);
         dispatch(LoginError());
        })
    }
  }, [isLogedIn]);


  return (
    <form
      onSubmit={loginHandler}
      className={nav ? " forms active__ welcome" : "forms welcome"}
    >
      <h2>Enter your credentials to log in</h2>
      <div className="form_control">
        <input
          className={result === "User Not Found!" || result === "Incorect Password!" ? "form_control error" : "form_control"}
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <i className={result === "User Not Found!" || result === "Incorect Password!" ? "fas fa-exclamation-circle" : "form_control"}></i>
      </div>
      <div className="form_control">
        <input
          className={result === "User Not Found!" || result === "Incorect Password!" ? "form_control error" : "form_control"}
          type="password"
          value={pass}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <i className={result === "User Not Found!" || result === "Incorect Password!" ? "fas fa-exclamation-circle" : "form_control"}></i>
        <small>{result}</small>

      </div>
      <button className="login_btn" type="submit">LOGIN</button>
      <Link to="/">
        <button className='back_btn'>BACK</button>
      </Link>
    </form>
  )
}
export default Login;