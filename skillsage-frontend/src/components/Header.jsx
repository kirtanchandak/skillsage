import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-between md:px-20 py-8 text-xl px-5">
        <div className="flex gap-16">
          <h1 className="font-dm-serif-display font-bold ">SkillSage+</h1>
        </div>
        <div>
          <ul className="flex lg:gap-8 gap-3 font-poppins">
            <span className="flex lg:gap-8 gap-3 lg:mt-[6px]">
              <li>COURSES</li>
              <li className="hidden md:block">MENTORS</li>
              <li>LOGIN</li>
            </span>
            <li className="hidden md:block bg-black text-white py-1 px-5 rounded-full bottom-10">
              SIGN UP
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
