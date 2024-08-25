import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { PiNotepadLight, PiUsersThreeLight } from "react-icons/pi";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="fixed  sidebar-main w-[20%] h-[100vh] bg-[#001a1a]">
      <div className=" sidebar-list pt-7 flex justify-start items-center flex-col">
        <ul className="sidebar-ul text-white font-sans font-light text-xl">
          <li className="sidebar-li p-3" id="sidebar-logo">
            <Link to='/'>
              <div className="flex justify-start items-center">
                <img
                  src="Images/logo.png"
                  alt=""
                  className="sidebar-logo-img w-10 h-10 mr-4 opacity-45"
                />
                <div className="">
                  <p className="font-semibold text-2xl p-0">ParkSync </p>
                  <p className="text-sm font-semibold -mt-1 text-[#72a5a5]">
                    Admin Panel
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <Link to="/dashboard" className=" visited:bg-[#118484] focus:bg-[#118484]  sidebar-li p-3 flex justify-start items-center mt-10 hover:bg-[#118484] hover:rounded-md pr-20 pl-4 cursor-pointer">
            <p>
              <RxDashboard className="mr-3" />
            </p>
            <p>Dashboard</p>
          </Link>
          <li className="focus:bg-[#118484] sidebar-li p-3 flex justify-start items-center hover:bg-[#118484] hover:rounded-md pr-20 pl-4 cursor-pointer">
            <p>
              <CiLocationOn className="mr-3" />
            </p>
            <p>Location</p>
          </li>
          <Link to='/reservation' className="focus:bg-[#118484] sidebar-li p-3 flex justify-start items-center hover:bg-[#118484] hover:rounded-md pr-20 pl-4 cursor-pointer">
            <p>
              <PiNotepadLight className="mr-3" />
            </p>
            <p>Reservation</p>
          </Link>
          <Link to='/user' className="focus:bg-[#118484] sidebar-li p-3 flex justify-start items-center hover:bg-[#118484] hover:rounded-md pr-20 pl-4 cursor-pointer">
            <p>
              <PiUsersThreeLight className="mr-3" />
            </p>
            <p>User</p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
