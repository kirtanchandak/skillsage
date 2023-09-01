import React from "react";
import Layout from "../components/Layout";
import heroimage from "../assets/hero-img.png";

function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col lg:flex-row  justify-center lg:pl-20 lg:pr-0 px-5">
          <div className="flex flex-col lg:w-1/2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-dm-serif-display lg:mt-36 mt-5">
              A revolution of <br /> learning with <br /> great mentors
            </h1>
            <div>
              <a
                className="bg-[#1C3DEE]  inline-block  hover:no-underline btn rounded-full px-3 py-1 mt-4 text-white font-medium"
                href="#upcoming"
              >
                GET STARTED
              </a>
            </div>
          </div>
          <div className="flex lg:w-1/2 w-5/6">
            <img
              src={heroimage}
              alt="hero-image"
              className="w-full mt-6 lg:mt-0 lg:border-l-2 lg:border-b-2 border-black"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
