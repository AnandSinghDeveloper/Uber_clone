import React from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import { FaSquare } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const LookingForDriver = (props) => {
  return (
    <div>
      <div
        onClick={() => {
          props.setVehicleFound(false);
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
      <h3 className=" capitalize text-2xl font-semibold px-3 mb-3">
        {" "}
        looking for driver ..{" "}
      </h3>

      <div className=" flex flex-col justify-between items-center ">
        <img
          className=" h-24"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=" Car"
        />
        <div className="p-3 w-full">
          <div className="flex items-center gap-5  border-b-2">
            <MdMyLocation
              style={{ width: "20px", height: "20px", marginRight: "-10px" }}
            />
            <div>
              <h3 className=" font-semibold text-lg  capitalize">
                Pickup location
              </h3>
              <p className=" capitalize -mt-1 text-sm text-gray-600">
                {" "}
                {props.pickup}{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaSquare
              style={{ width: "15px", height: "15px", marginRight: "-10px" }}
            />
            <div>
              <h3 className=" font-semibold text-lg capitalize">Destination</h3>
              <p className=" capitalize -mt-1 text-sm text-gray-600">
                {" "}
                {props.destination}{" "}
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
                {props.fare[props.vehicleType]}
              </h3>
              <p className=" capitalize -mt-1 text-sm text-gray-600">
                {" "}
                cash cash{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
