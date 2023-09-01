import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const accessToken = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
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
              <Link to="/courses">COURSES</Link>
              <li className="hidden md:block">MENTORS</li>
              {accessToken ? (
                <button onClick={handleLogout}>LOGOUT</button>
              ) : (
                <Link to="/login">LOGIN</Link>
              )}
            </span>
            <Link
              className="hidden md:block bg-black text-white py-1 px-5 rounded-full bottom-10"
              to="/adminlogin"
            >
              ADMIN LOGIN
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
