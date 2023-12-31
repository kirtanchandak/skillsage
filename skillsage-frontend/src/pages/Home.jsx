import React from "react";
import Layout from "../components/Layout";
import heroimage from "../assets/hero2.png";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";

function Home() {
  const userEmail = useRecoilValue(userEmailState);
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center mt-12 md:mt-12 px-5">
          <div className="mb-4">
            <p className="text-4xl font-bold font-dm-serif-display text-center">
              Empowering Education: Your <br />
              One-Stop Learning Companion
            </p>
          </div>
          {userEmail ? (
            <div>
              <a
                href="/courses"
                className="text-center bg-primary rounded-full px-2 py-1 font-dm-serif-display text-lg"
              >
                Courses
              </a>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-center bg-primary rounded-full px-2 py-1 font-dm-serif-display text-lg"
            >
              Login
            </Link>
          )}

          <div>
            <img src={heroimage} alt="hero-img" className="pt-8 w-[410px]" />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
