import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoadingState } from "../store/selectors/isUserLoading";

function Header() {
  const userEmail = useRecoilValue(userEmailState);
  const loadingState = useRecoilValue(isUserLoadingState);

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
              <Link to="/courses" className="hidden lg:flex">
                COURSES
              </Link>
              <li className="hidden md:block">MENTORS</li>
              {userEmail ? (
                <div className="flex lg:gap-8 gap-5">
                  <p>{userEmail}</p>
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
