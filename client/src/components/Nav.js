import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DropDownMenu from "./Dropdown";
const Nav = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  return (
    <div>
      <div className=" flex justify-between">
        <div className="flex items-baseline">
          <Link to="/">
            <div className="relative top-[8px] w-[100px]">
              <div className="absolute bg-orange-600 w-10 h-10 rounded-full left-[-8px] bottom-[-32px]"></div>
              <div className="absolute bg-orange-500 w-6 h-6 rounded-full "></div>
            </div>
            <h1 className="ml-10 font-bold text-3xl ">Do Yoga</h1>
          </Link>

          <div className="ml-3">
            <Link to="/filter">
              <button className="flex justify-between items-center bg-orange-400 w-28 h-10 rounded-lg text-white font-bold px-3">
                Explore <RiArrowDropDownLine className="text-4xl" />
              </button>
            </Link>
          </div>
        </div>
        {isAuthenticated ? (
          <>
          <DropDownMenu user={user}/>
          </>
        ) : (
          <Link to="/login">
            <div className="text-orange-500 font-bold">Login</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
