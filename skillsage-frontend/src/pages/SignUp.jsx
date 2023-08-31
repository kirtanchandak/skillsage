import React from "react";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username, password);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/user/signup", {
        username,
        password,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="">Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={handleSignup}>
          signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;
