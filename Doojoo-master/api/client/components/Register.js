import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ nav }) => {

  const [matchPass, setMatchPass] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const initialValues = { name: "", surname: "", email: "", password: "", dob: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(formValues);
      axios
        .post('http://localhost:3006/api/account/register', formValues)
        .then((response) => {
          if (response.status === 409) {
            alert("Email already in use.");
          }
        })
        .catch((err) => {
          alert(err.response.data);
        })
      navigate("/dashboard");
    }
  }, [errors]);

  // const renderCssClasses = () => {
  //   let classes = "";

  //   if (nav) {
  //     classes += "activenav"; 
  //   }
  //   return classes;
  // }
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    //console.log(formValues);

  }
  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      error.name = "First Name is required!";
    }
    if (!values.surname) {
      error.surname = "Surname is required!";
    }
    if (!values.email) {
      error.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required!";
    } else if (matchPass != values.password) {
      error.password = "Passwords do not match!";
    } else if (values.password.length < 4) {
      error.password = "Password must be at least 5 characters!"
    } else if (values.password.length > 12) {
      error.password = "Password cannot exceed more than 12 characters!"
    }
    if (!values.dob) {
      error.dob = "Date of Birth is required!";
    }
    return error;
  }

  return (
    <form onSubmit={registerUser}
      className={nav ? "forms active__ welcome" : "forms welcome"}
    >
      {Object.keys(errors).length === 0 && isSubmit ? (<p>Signed up succesfully!</p>)
        : <pre>Complete the fields to register</pre>}
      <div className="form_control">
        <input
          className={errors.name ? "form_control error" : ""}
          type="text"
          name="name"
          value={formValues.name}
          placeholder="First Name"
          onChange={handleOnChange}
        />
        <i className={errors.name ? "fas fa-exclamation-circle" : ""}></i>
        <small>{errors.name}</small>
      </div>

      <div className="form_control">
        <input
          className={errors.surname ? "form_control error" : ""}
          type="text"
          name="surname"
          value={formValues.surname}
          placeholder="Surname"
          onChange={handleOnChange}
        />
        <i className={errors.surname ? "fas fa-exclamation-circle" : ""}></i>
        <small>{errors.surname}</small>
      </div>

      <div className="form_control">
        <input
          className={errors.email ? "form_control error" : ""}
          type="email"
          name="email"
          value={formValues.email}
          placeholder="E-Mail"
          onChange={handleOnChange}
        />
        <i className={errors.email ? "fas fa-exclamation-circle" : ""}></i>
        <small>{errors.email}</small>
      </div>

      <div className="form_control">
        <input
          className={errors.password ? "form_control error" : ""}
          type="password"
          name="password"
          value={formValues.password}
          placeholder="Create Password"
          onChange={handleOnChange}
        />
        <i className={errors.password ? "fas fa-exclamation-circle" : ""}></i>
        <small>{errors.password}</small>
      </div>

      <div className="form_control">
        <input
          className={errors.password ? "form_control error" : ""}
          type="password"
          value={matchPass}
          placeholder="Confirm Password"
          onChange={(e) => setMatchPass(e.target.value)}
        />
        <i className={errors.password ? "fas fa-exclamation-circle" : ""}></i>
        <small>{errors.password}</small>
      </div>

      <div className="form_control">
        <input
          className={errors.dob ? "form_control error" : ""}
          type="date"
          name="dob"
          value={formValues.dob}
          placeholder="Date of Birth"
          onChange={handleOnChange}
        />
        <i className={errors.dob ? "fas fa-exclamation-circle" : ""}></i>
        <small>{errors.dob}</small>
      </div>
      <input className="login_btn" type="submit" value="REGISTER" disabled={Object.keys(errors).length === 0 && isSubmit} />
      <Link to="/">
        <button className='back_btn'>BACK</button>
      </Link>
    </form>
  )
}
export default Register;