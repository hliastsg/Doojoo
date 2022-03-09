import React from 'react';
import { Link } from 'react-router-dom';

const NotAuth = () => {

  return (
    <div className='showcase welcome'>
      <h2>You are not authenticated, please log in first.</h2>
      <Link to="/login">
        <button className='login_btn'>LOG IN</button>
      </Link>
    </div>
  )
}
export default NotAuth;