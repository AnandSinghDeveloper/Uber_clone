import React from "react";

import { MdMyLocation } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";
import HomeScreen from "../Pages/HomeScreen";

const Riding = () => {
  return (
    <div className=" h-screen">
      <Link
        to="/HomeScreen"
        className=" flex absolute right-2 top-2  w-14 h-14 items-center justify-center bg-white rounded-full "
      >
        <FaHome style={{ height: "30px", width: "30px" }} />
      </Link>
      <div className=" h-1/2">
        <img
          className=" w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Map image"
        />
      </div>
      <div className=" w-full p-2 flex flex-col justify-between ">
        <div className=" flex justify-between p-4">
          <div className=" relative h-24">
            <div className=" absolute h-10 w-24 bottom-16 left-12">
              <img
                className=" h-16"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
                alt=" Car"
              />
            </div>
            <div className=" w-20 h-20 rounded-full bg-[url(https://t3.ftcdn.net/jpg/03/05/77/64/360_F_305776453_t7SUl48g63zLsyODxd60aj6EcWR9avVK.jpg)] bg-cover absolute bottom-5 bg-center "></div>
          </div>
          <div className=" text-right">
            <h2 className=" capitalize -mb-1 text-lg font-medium">Anand </h2>
            <h4 className=" capitalize text-xl font-semibold">UP-A5-2356</h4>
            <p className=" capitalize -mt-1 text-sm text-gray-600 ">
              maruti alto
            </p>
          </div>
        </div>

        <div className=" flex flex-col justify-between items-center  ">
          <div className=" w-full">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <MdMyLocation
                style={{ width: "20px", height: "20px", marginRight: "-10px" }}
              />
              <div>
                <h3 className=" font-semibold text-lg">562/11A</h3>
                <p className=" capitalize -mt-1 text-sm text-gray-600">
                  {" "}
                  baktawarpur delhi-36{" "}
                </p>
              </div>
            </div>

            <div className="flex  items-center gap-5 p-3">
              <IoMdCash
                style={{ width: "20px", height: "20px", marginRight: "-10px" }}
              />
              <div>
                <h3 className=" font-semibold text-lg text-green-600">
                  <span className=" inline-block">
                    {" "}
                    <MdOutlineCurrencyRupee
                      style={{
                        color: "green",
                        marginRight: "-5px",
                        marginBottom: "-3px",
                      }}
                    />
                  </span>{" "}
                  193.20
                </h3>
                <p className=" capitalize -mt-1 text-sm text-gray-600">
                  {" "}
                  cash cash{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2 ">
          <button className="w-full bg-green-600 p-2 rounded-lg text-white mt-[12vh] font-semibold capitalize">
            {" "}
            make a payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
