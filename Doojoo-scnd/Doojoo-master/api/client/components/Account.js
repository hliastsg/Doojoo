import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const Account = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <nav className="menubar">
      <Link to="/account/usr-config">
        <li className="menu-acc">
        <i className="fas fa-user-cog"></i>
        <h4>Account</h4>
        </li>
        </Link>
     </nav>
     
     {/* <div className="config">
       <h1>User Configuration</h1>
     </div> */}
    </div>
  )
}



export default Account;