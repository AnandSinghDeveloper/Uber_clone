import React, { useState } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import { FaSquare } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const ConfirmRidepopUp = (props) => {
  const [OTP, setOTP] = useState("");
  console.log(OTP);

  const submithandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        onClick={() => {
          props.setConfimRidePanal(false);
        }}
        className=" w-full flex  justify-center p-3 "
      >
        <RiArrowDownWideLine
          style={{
            height: "30px",
            width: "30px",
            color: " rgb(209 213 219 / var(--tw-border-opacity, 1))",
          }}
        />
      </div>
      <h3 className=" capitalize text-2xl font-semibold mb-3 text-zinc-800">
        {" "}
        confirm this ride to start{" "}
      </h3>

      <div className=" flex items-center justify-between p-5 h-16 w-full bg-blue-400 rounded-lg mt-6 mb-4">
        <div className=" flex items-center ">
          <img
            className=" w-10 h-10 rounded-full object-cover"
            src="https://img.freepik.com/free-photo/young-determined-armenian-curlyhaired-female-university-student-listen-carefully-asignment-look-confident-ready-task-cross-hands-chest-smiling-selfassured-standing-white-background_176420-56066.jpg"
            alt=""
          />
          <h3 className=" capitalize text-lg font-medium ml-3">
            {" "}
            Sheetal rathore{" "}
          </h3>
        </div>
        <h3 className=" text-lg font-semibold">2.2km</h3>
      </div>

      <div className=" flex flex-col justify-between items-center ">
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
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaSquare
              style={{ width: "15px", height: "15px", marginRight: "-10px" }}
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
              <h3 className=" font-semibold text-lg text-green-700">
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

        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="w-[95%]"
        >
          <input
            value={OTP}
            onChange={(e) => {
              setOTP(e.target.value);
            }}
            className=" w-full bg-[#eeeeee] px-8 py-3 text-base rounded mt-[5vw]"
            type="text"
            placeholder="Enter your OTP"
          />
          <div className="w-full mt-10">
            <button
              onClick={() => {
                props.setCaptainRideing(true);
                props.setRidePopUp(false);
                props.setConfimRidePanal(false);
              }}
              className=" w-full bg-green-600 p-2 rounded-lg text-white font-semibold mt-4 capitalize "
            >
              Confirm ride
            </button>

            <button
              onClick={() => {
                props.setRidePopUp(false);
                props.setConfimRidePanal(false);
              }}
              className=" w-full bg-red-500 p-2 rounded-lg text-gray-100 font-semibold mt-4  capitalize "
            >
              cancal ride
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmRidepopUp;
