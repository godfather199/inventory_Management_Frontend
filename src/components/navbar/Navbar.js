import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/userContext";
import "./navbar.css";

function Navbar() {
  const {user, dispatch} = useContext(Context)

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT'
    })

    window.location.replace('/')
  }

  return (
    <div className="navbarContainer">
      <div className="navbarWrapper">
        <div className="navbarLeft">
            <Link className="link" to = '/'>
                <span className="navbarTitle">Inventory Management System</span>
            </Link>
        </div>
        <div className="navbarCenter">
            <Link className="link" to = {user ? '/products' : '/login'}>
                <span className="navbarProduct">Create Product</span>
            </Link>
        </div>
        <div className="navbarRight">
          {user ? (
            <button className="navbarLogout" onClick = {handleLogout}>LOGOUT</button>
          ) : (
          <ul className="navbarList">
            <Link to="/register" className="link">
              <li className="navbarListItem">Register</li>
            </Link>
            <Link to="/login" className="link">
              <li className="navbarListItem">Login</li>
            </Link>
          </ul>
            
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
