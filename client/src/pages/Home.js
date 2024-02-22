import React from 'react'
import Card from '../components/Card'
import Nav from '../components/Nav'
import { courses } from '../data/data'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import Loader from "../components/loader/Loader"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getClasses,clearErrors } from '../Redux/actions/yogaClassActions'
import banner2 from "../Assets/yoga-class.jpg"
const Home = () => {
  const dispatch = useDispatch();
  const [searchInput,setSearchInput]=useState('');

  const searchHit = (e)=>{
    if(e.key === "Enter"){
      dispatch(getClasses(searchInput,[],[],[],[]))
    }
  }
  
  const {classes,error,loading} = useSelector(state=>state.classes)
  useEffect(()=>{
    if(error){
      dispatch(clearErrors());
    }
    dispatch(getClasses("",[],[],[],[]))
  },[error])

  return (
    <>
      {classes === undefined ? <Loader/>:<>
    <div className="mx-32 mt-7 mb-7">
    <Nav/>
    <div className="flex flex-col mt-10">
    <div className="text-black font-medium"> Begin your yoga journey.</div>
  <div className="text-black font-medium">Join yoga classNamees designed for complete beginners.</div>
    </div>
    <div className="mt-10 relative">
     <div className="text-orange-400 text-2xl font-medium mb-3">Monthly Yoga for Beginners</div>
     <img src={banner2} alt="yoga-class-image" width="150px" className="absolute left-[550px] top-[-70px]"/>
   
    <input type="search" placeholder='Find your yoga practice' className="border rounded-full w-[350px] py-1 pl-2" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyDown={searchHit}/>
    </div>
   <div className="mt-10">
   <div  className=" grid grid-cols-3  ">
 {
   classes?.map((item)=>(
      <div key={item.id}>
        <Card title={item.name} description={item.description} teacher={item.teacherName} price={item.price} img={item.img} _id={item._id} style={item.style} rating={item.rating} level={item.level}/>
      </div>
   ))
  }
 </div>
   </div>
 </div>
    </>}
    </>
  )
}

export default Home