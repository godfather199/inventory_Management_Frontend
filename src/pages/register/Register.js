import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./register.css";

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newUser = {
      username,
      email,
      password
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/auth/register`, newUser)

      res.data && window.location.replace('/login')
    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <>
    <Navbar />
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit = {handleSubmit}>
        <div className="registerFormItems">
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
            onChange = {e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="registerFormItems">
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
            onChange = {e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="registerFormItems">
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {/* <div className="registerFormItems">
          <label>Phone No.</label>
          <input type="tel" placeholder="Enter your phone no..." className="registerInput" />
        </div> */}
        <button className="registerButton" type="submit">
          Register
        </button>
        <span className="registerLoginBtn">
          Already Signed in ? <Link className="link" to = '/login'>Login</Link>
        </span>
      </form>
    </div>
    </>
  );
}

export default Register;
