import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";

const Card = ({style, level,title, teacher, price, img, _id, rating }) => {
  const location = useLocation();
  return (
    <div>
      <div className="relative m-6 flex h-[360px] w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div
          className="relative mx-3 mt-3 flex overflow-hidden rounded-xl"
          href="#"
        >
          <img className="object-cover w-[250px] h-[160px]" src={img} alt="Yoga Teacher image" />
        </div>
        <div className="mt-4 px-5 pb-5">
          <div>
            <h5 className="tracking-tight text-black mb-3">{title.substring(0,60)} {title.length > 60 ? "..." :""}</h5>
            <div className="text-sm text-gray-500">For {level}</div>
            <div className="text-sm text-gray-500">By {teacher}{" "}|{" "}{style}</div>
          </div>
          <div className="text-gray-500 text-sm mt-2"> 
            <div className="flex items-baseline gap-2">
            <CiCalendar/> 
            <div>5 days a week M,T,W,Th,F</div>
            </div>
           
          </div>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p className="text-black">
             
                ₹ {price}/month
             
            </p>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
        
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                {rating}
              </span>
            </div>
          </div>
          <Link to={`/cardDetails/${_id}`}>
            <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            {location.pathname === "/myBookings" ? <>View</>  : <>Join</> }
              
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
