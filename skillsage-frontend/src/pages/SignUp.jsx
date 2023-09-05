import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";

function Login() {
  const userEmail = useSetRecoilState(userState);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username, password);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/admin/signup", {
        username: username,
        password: password,
      });
      localStorage.setItem("token", res.data.token);
      userEmail({
        isLoading: false,
        userEmail: username,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Layout>
        <div class="max-w-[280px] mx-auto">
          <div class="flex flex-col items-center mt-[10vh]">
            <h2 class="mb-5 text-gray-900 font-mono font-bold text-xl">
              Sign Up
            </h2>
            <form>
              <input
                type="text"
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                class="bg-primary text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
                onClick={handleSignUp}
              >
                Log In
              </button>
            </form>
            <p class="text-center mt-3 text-[14px]">
              Already have an account?{" "}
              <Link to="/login" class="text-gray-600">
                Login
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Login;
