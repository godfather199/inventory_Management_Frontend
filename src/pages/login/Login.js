import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Context } from "../../context/userContext";
import "./login.css";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()

  const {dispatch} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const loginUser = {
      email,
      password
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', loginUser)

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data
      })

      window.location.replace('/products')
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="loginFormItems">
            <label>Email</label>
            <input
              className="loginInput"
              type="email"
              required
              placeholder="Enter your email..."
              onChange = {e => setEmail(e.target.value)}
            />
          </div>
          <div className="loginFormItems">
            <label>Password</label>
            <input
              className="loginInput"
              type="password"
              placeholder="Enter your password..."
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="loginButton" type ='submit'>Login</button>
          <span className="loginRegisterBtn">
            New User ? <Link className="link" to = '/register'>Register</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Login;
