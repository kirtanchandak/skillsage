import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username, password);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/user/login", {
        username,
        password,
      });
      navigate("/");
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="">Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={handleSignup}>
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
