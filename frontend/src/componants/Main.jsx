import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoSearch, IoFilter } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Table from "./Table.";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Main = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className=" p-10 ml-72 w-[80%]">
        <div className="">
          <div className="flex flex-col">
            <p className="font-semibold text-2xl font-sans">Reservations</p>
            <span className="flex justify-start items-center font-sans font-medium text-gray-300">
              Location Setting{" "}
              <span>
                <FaAngleRight />
              </span>{" "}
              Reservation Setting{" "}
            </span>
          </div>
          <div className=""></div>
        </div>
        <hr className="mt-5" />
        <div className="mt-5 flex justify-between items-center">
          <div className="flex items-center">
            <IoSearch className="absolute text-3xl  pl-2 text-gray-600" />
            <input
              type="text"
              className="p-2 outline-none border-gray-300 pr-24 pl-10 placeholder:font-sans placeholder:text-gray-400 placeholder:font-medium rounded-md"
              placeholder="Search Tickets"
            />
          </div>

          <div className="flex items-center">
            <div className="">
              <button
                className="flex justify-center items-center font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setModal(true)}
              >
                <span className="">
                  {" "}
                  <IoFilter className="text-black" />
                </span>{" "}
                <span className="ml-2"> Filter</span>{" "}
                <span className="ml-2">
                  <RiArrowDropDownLine className="text-xl" />
                </span>
              </button>
              {modal ? (
                <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="relative px-6 py-1 pt-5 flex-auto">
                          <h4 className="font-semibold text-lg">Location</h4>
                          <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                            <select name="" id="" className="px-5 pr-7 py-1 rounded-md w-full text-gray-500 border outline-none focus:outline-none border-gray-300" >
                              <option className="px-5 pr-7 py-1 text-gray-300"  >select location </option>
                            </select>
                          </p>
                        </div>
                        <div className="relative px-6 py-1 flex-auto">
                          <h4 className="font-semibold text-lg">Date & Time</h4>
                          <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                            <input type="datetime-local" name="" id="" className="px-2 pr-2 py-1 rounded-md w-full text-gray-500 border outline-none focus:outline-none border-gray-300" />
                          </p>
                        </div>
                        <div className="relative px-6 py-1 flex-auto">
                          <h4 className="font-semibold text-lg">Date & Time</h4>
                          <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                            <input type="datetime-local" name="" id="" className="px-2 pr-2 py-1 rounded-md w-full text-gray-500 border outline-none focus:outline-none border-gray-300" />
                          </p>
                        </div>
    
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="bg-gray-300 rounded-lg background-transparent font-bold  px-8 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setModal(false)}
                          >
                            Cancle
                          </button>
                          <button
                            className="text-white bg-gradient-to-r outline-none from-cyan-800 via-cyan-900 to-cyan-600 hover:bg-gradient-to-br   font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2"
                            type="button"

                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>

              ) : null}
            </div>
            <div className="ml-3 flex items-center mt-2">
              <span className=" absolute text-white -mt-2 pl-2 pr-2">
                <GoPlus className="font-bold text-white text-xl" />
              </span>
              <Link to='/form'>
                <button
                  type="button"
                  class="focus:outline-none text-white bg-[#6e9da2] hover:bg-sky-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-3 me-2 mb-2 dark:bg-[#8ecbd1] dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Add Reservation
                </button>
              </Link>
            </div>
            <div className="ml-3 flex items-center mt-2">
              <span className=" absolute text-white -mt-2 pl-2 pr-2">
                <FaCloudDownloadAlt className="font-bold text-white text-xl" />
              </span>
              <button
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Download Repoarts
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <div className="">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
