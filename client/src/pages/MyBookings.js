import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { myBookings } from '../Redux/actions/bookingActions';
import Loader from "../components/loader/Loader"
import Card from "../components/Card"
const MyBookings = () => {
  const dispatch = useDispatch();
  const {loading,bookings} = useSelector((state)=> state.myBookings)
  useEffect(()=>{
    dispatch(myBookings())
  },[])
  return (
    <><Nav/>
    {loading ? <Loader/> : 
    <div className='grid grid-cols-3'>
      {
        bookings.length ?
      bookings?.map((item)=>(
       <div key={item.id}>
        <Card title={item.yogaClass.name} description={item.yogaClass.description} teacher={item.yogaClass.teacherName} price={item.yogaClass.price} img={item.yogaClass.img} _id={item.yogaClass._id} style={item.yogaClass.style} rating={item.yogaClass.rating} level={item.yogaClass.level}/>
       </div>
    )) : <div className='flex justify-center items-center w-[1300px] h-[500px] font-bold text-5xl opacity-70 '>No Bookings!</div>
      }
    </div>
    }
    </>
  )
}

export default MyBookings