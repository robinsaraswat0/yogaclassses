import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getClassDetails } from '../Redux/actions/yogaClassActions'
import Loader from '../components/loader/Loader'
const CardInfo = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const { classD,loading, error } = useSelector(
        (state) => state.classDetails
      );
    
    useEffect(()=>{
        dispatch(getClassDetails(id))
    },[dispatch,id])
  return (
    <>
    {
        loading ? <Loader /> : 
        <div>
        <div className="mb-20">
        <Nav/>
        </div>
        <div className="flex gap-56">
        <div>
            <img  src={classD.img} alt="yoba" width="600px" height="600px"/>
        </div>
           <div>
           <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-4 text-xl font-medium text-black dark:text-gray-400">{classD.name}</h5>
    <div class="flex items-baseline text-gray-900 dark:text-white">
    </div>
    <ul role="list" class="space-y-5 my-7">
    <li class="flex items-center gap-3">
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Level:</span>
    <span>{classD.level}</span>
    </li>
    <li class="flex items-center gap-3">
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">STYLE:</span>
    <span>
    {classD.style}</span>
    </li>
    <li class="flex items-center gap-3">
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">DATE:</span>
    <span>
    5 days a week
    Monday, Tuesday, Wednesday, Thursday, Friday</span>
    </li>
    <li class="flex items-center gap-3">
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">TIME:</span>
    <span>{classD.schedule}</span>
    </li>
    <li class="flex items-center gap-3">
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">FEE:</span>
    <span>{classD.price}</span>
    </li>
    <li class="flex items-center gap-3">
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Rating</span>
    <span>{classD.rating}</span>
    </li>
    </ul>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Booking</button>
    </div>
           </div>
    
        </div>
        </div>
    }
    </>
  )
}

export default CardInfo
