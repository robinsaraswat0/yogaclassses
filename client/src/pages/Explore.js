import React, { useEffect,useState } from 'react'
import Card from '../components/Card'
import Nav from '../components/Nav'
import Filter from '../components/Filter'
import { courses } from '../data/data'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getClasses } from '../Redux/actions/yogaClassActions'
import Loader from '../components/loader/Loader'
const Explore = () => {
  const dispatch = useDispatch();
  const [level,setLevels] = useState([]);
  const [style,setStyles] = useState([]);
  const [time,setTime] = useState([]);
  const [price,setPrice] = useState([])

  const {classes,error,loading} = useSelector(state=>state.classes)
  useEffect(()=>{
    if(error){
      dispatch(clearErrors())
    }
    dispatch(getClasses("",level,style,time,price))
  },[])
  return (
    <div >
    <div className="mb-6">
    <Nav/>
    </div>
    <div className='flex relative'>
    <Filter level={level} setLevels={setLevels} style={style} setStyles={setStyles} time={time} setTime={setTime} price={price} setPrice={setPrice}/>
      <div className="flex ">
    <div  className=" grid grid-cols-3 gap-3">
    {loading ?
      <div className="absolute" >
      <Loader/> 
      </div>
     : 
      classes?.map((item)=>(
         <div key={item.id}>
          <Card title={item.name} description={item.description} teacher={item.teacherName} price={item.price} img={item.img} _id={item._id} style={item.style} rating={item.rating} level={item.level}/>
         </div>
      ))
     }
    </div>
      
      
    </div>
    </div>
    
    </div>
  )
}

export default Explore