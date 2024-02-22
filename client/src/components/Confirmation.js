import React from 'react'
import IconBtn from './IconBtn'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newBooking } from '../Redux/actions/bookingActions'
import { useNavigate, useParams } from 'react-router-dom'
const ConfirmationModal = ({modalData,selectedDateFrom,setSelectedDateFrom,selectedDateTo,setSelectedDateTo,teacher}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams();
    const handleDateChangeFrom=(date)=>{
        if(date.getTime() >= Date.now())
        setSelectedDateFrom(date);
    }

    const handleDateChangeTo=(date)=>{
        if(date.getTime() > new Date(selectedDateFrom).getTime()){
            setSelectedDateTo(date);
        }
    }
  return (
    <div className="fixed inset-0 z-[1000] backdrop-blur-sm !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 ">
    <div className="w-[380px] h-[150px] pl-[30px] rounded-lg border border-richblack-400 bg-orange-400 bg-opacity-80  p-6">
       
{/* //datepicker */}
   <div>
   <div className="text-white">
    Selected Date & Time for Class Booking
   </div>
   <div className='flex gap-4 mt-[10px]'>

    <DatePicker
    selected={selectedDateFrom}
    onChange={handleDateChangeFrom}
    dateFormat="dd/MM/yyyy; hh:mm"
    showTimeSelect
    startDate={`${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`}
    timeFormat="hh:mm"
    timeIntervals={30}
    className='w-[150px] bg-transparent placeholder-black'
    placeholderText='From'
    />
    <DatePicker
        selected={selectedDateTo}
        onChange={handleDateChangeTo}
        dateFormat="dd/MM/yyyy; hh:mm"
        showTimeSelect
        timeFormat="hh:mm"
        timeIntervals={30}
        className='w-[150px] bg-transparent placeholder-black'
        placeholderText='To'
        />
   </div>

    
   </div>

    <div className="flex items-center gap-x-10 mt-4">
        <IconBtn 
            onclick={()=> {dispatch(newBooking(selectedDateFrom,selectedDateTo,teacher,id)) 
                alert("Class Booked Successfully")}}
            text={modalData?.btn1Text}
        />
        <IconBtn 
            onclick={modalData?.btn2Handler}
            text={modalData?.btn2Text}
        />
    </div>
    </div>
    </div>
  )
}

export default ConfirmationModal
