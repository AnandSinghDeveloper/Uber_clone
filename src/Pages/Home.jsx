import React from "react";
import { Link } from "react-router";
import UserLogin from "./UserLogin";

const Home = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://cdn.pixabay.com/photo/2015/09/13/11/42/green-traffic-light-938031_1280.jpg)] h-screen pt-8 flex justify-between flex-col w-full bg-green-300">
        <img
          className=" w-20 ml-9"
          src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
          alt=""
        />
        <div className=" bg-white px-[5vw] py-[8vw] rounded-tl rounded-tr opacity-90 ">
          <h2 className=" text-2xl font-bold mt-[1vh]  leading-none tracking-tight ">
            Get Started with Uber
          </h2>
          <Link
            to="/login"
            className=" inline-block text-center  py-[2vw] bg-black text-slate-100  w-full rounded text-xl mt-4 cursor-pointer "
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
