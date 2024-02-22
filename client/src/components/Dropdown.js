import React from 'react'
import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from '../Redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
const DropDownMenu = ({user}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
  return (
   
  <div>
  <button className="relative" onClick={() => setOpen(prev=> !prev)}>
      <div className="flex items-center justify-center gap-x-1">
        <div
          className="font-bold">
          {user.firstName}</div>
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
          ref={ref}
        >
          <Link to="/myBookings" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-orange-400 hover:text-richblack-25 transition delay-50">
              <VscDashboard className="text-lg" />
              Bookings
            </div>
          </Link>
          <div
            onClick={() => {
                dispatch(logout())
                navigate("/")
                setOpen(false)
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-orange-400 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  </div>
  )
}

export default DropDownMenu
