import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [email, setEmail] = useState("");
  const accessToken = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    const name = async () => {
      try {
        const res = await axios.get("http://localhost:3000/admin/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setEmail(res.data.username);
      } catch (err) {
        console.log(err);
      }
    };
    name();
  }, []);

  return (
    <>
      <div className="flex justify-between md:px-20 py-8 text-xl px-5 border-b-2 border-black">
        <div className="flex gap-16">
          <a className="font-dm-serif-display font-bold " href="/">
            SkillSage+
          </a>
        </div>
        <div>
          <ul className="flex lg:gap-8 gap-3 font-poppins">
            <span className="flex lg:gap-8 gap-3 lg:mt-[6px]">
              <Link to="/courses" className="hidden lg:flex">
                COURSES
              </Link>
              <li className="hidden md:block">MENTORS</li>
              {email ? (
                <div className="flex lg:gap-8 gap-5">
                  <p>{email}</p>
                  <button onClick={handleLogout}>LOGOUT</button>
                </div>
              ) : (
                <Link to="/login">LOGIN</Link>
              )}
            </span>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
