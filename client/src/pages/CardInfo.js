import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getClassDetails } from "../Redux/actions/yogaClassActions";
import Loader from "../components/loader/Loader";
import ConfirmationModal from "../components/Confirmation";

const CardInfo = () => {
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [selectedDateFrom, setSelectedDateFrom] = useState(``);
  const [selectedDateTo, setSelectedDateTo] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();

  const { classD, loading, error } = useSelector((state) => state.classDetails);
  const {isAuthenticated}=useSelector((state)=>state.user);

  useEffect(() => {
    dispatch(getClassDetails(id));
  }, [dispatch, id]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="mb-20">
            <Nav />
          </div>
          <div className="flex gap-40">
            <div>
              <img src={classD.img} alt="yoba" width="400px" className="h-[400px]" />
            </div>
            <div>
              <div class="w-[350px]   bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class=" text-xl font-bold text-black dark:text-gray-400">
                  {classD.name}
                </h5>
                <div class="flex items-baseline text-gray-900 dark:text-white"></div>
                <ul role="list" className="space-y-1 my-3">
                  <li class="flex items-center gap-2">
                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                      LEVEL :
                    </span>
                    <span>{classD.level}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                      STYLE :
                    </span>
                    <span>{classD.style}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                      DATE  <span className="ml-1"> : </span> 
                      <span className="text-black ml-1"> 5 days a week Monday, <span className="ml-14">Tuesday, Wednesday, <span className="ml-14">Thursday,Friday</span> </span></span> 
                    </span>
                    
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                      TIME<span className="ml-1"> : </span> 
                      <span className="text-black ml-1">{classD.schedule}</span>
                    </span>
                    
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                      FEE  <span className="ml-3"> : </span> 
                    </span>
                    <span>₹ {classD.price} per month</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
                      Rating:
                    </span>
                    <span>{classD.rating}.0</span>
                  </li>
                </ul>
                <div>
                  <button
                    onClick={() => isAuthenticated ?
                      setConfirmationModal({
                        btn1Text: "Book Class",
                        btn2Text: "Cancel",
                        btn2Handler: () => setConfirmationModal(null),
                      }) : navigate("/login")
                    }
                    className="px-8 py-2 text-sm font-medium text-richblack-300"
                  >
                    <div className="flex items-center gap-x-2 ml-14">
                      <button
                        type="button"
                        className=" text-white font-bol bg-orange-500   focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900  rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                      >
                        Booking
                      </button>
                    </div>
                  </button>
                  {confirmationModal && (
                    <ConfirmationModal
                      modalData={confirmationModal}
                      selectedDateFrom={selectedDateFrom}
                      setSelectedDateFrom={setSelectedDateFrom}
                      selectedDateTo={selectedDateTo}
                      setSelectedDateTo={setSelectedDateTo}
                      teacher={classD.teacherName}
                    />
                  )}
                      
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardInfo;
