import axios from 'axios';
import React from 'react';
import Account from './Account';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const AccConfig = () => {

  const email = useSelector(state => state.auth.user);
  const name = useSelector(state => state.getUser.name);
  console.log(name);
  // const initCred = { name: "", surname: "", email: "", dob: "" };
  // const [initCredentials, setInitCredentials] = useState(initCred);

  axios
    .post(("/api/account/edit"), { email: email })
    .then((response) => {
      console.log(response.data);
      
    })
    .catch((err) => {
      console.log(err);
    });
  
  return (
    <div>
      <Account/>
      <div className="config">
        <h1>User Configuration</h1>
        <p>In this section, you can edit your credentials, in case that you made a mistake when you created your account. <br />
          Click the save button to save your credentials.
        </p>
        <form action="" className="config-form">
          <label >First Name</label>
          <input type="text" placeholder={localStorage.getItem("name")} />
          <label>Last Name</label>
          <input type="text" placeholder={localStorage.getItem("surname")}/>
          <label>E-mail</label>
          <input type="text" placeholder={email}/>
          <label>Date of birth</label>
          <input type="date" />
          <input type="submit" value="SAVE" className="signup_btn"/>
        </form>
      </div>
    </div>
  )
}

export default AccConfig;