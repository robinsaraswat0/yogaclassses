import React, { useEffect,useState } from 'react'
import { levels } from '../data/data'
import { prices } from '../data/data'
import { times } from '../data/data'
import { styles } from '../data/data'
import { useDispatch } from 'react-redux'
import { getClasses } from '../Redux/actions/yogaClassActions'

const Filter = ({level,setLevels,style,setStyles,time,setTime,price,setPrice}) => {
    const dispatch = useDispatch();
    const handleLevelChange=(e)=>{
      if(e.target.checked){
        setLevels(prev=>[...prev,e.target.name])
      }else{
        setLevels(level=>level.filter((value) => value != e.target.name))
      }
    }
    const handleStyleChange=(e)=>{
      if(e.target.checked){
        setStyles(prev=>[...prev,e.target.name])
      }else{
        setStyles(style=>style.filter(value=>value!=e.target.name))
      }
    }
    const handleTimeChange=(e)=>{
      if(e.target.checked){
        setTime(prev=>[...prev,e.target.name])
      }else{
        setTime(time=>time.filter(value => value!=e.target.name))
      }
    }

    const handlePriceChange = (e)=>{
      if(Number(e.target.id) === 1){
        setPrice([1000,2000,1])
      }else if(Number(e.target.id) === 2){
        setPrice([2000,3000,2])
      }else if(Number(e.target.id) === 3){
        setPrice([0,1000,3])
      }else if(Number(e.target.id) === 4){
        setPrice([3000,Number.MAX_SAFE_INTEGER,4])
      }
    }
  
    useEffect(()=>{
      dispatch(getClasses("",level,style,time,price))
    },[level,style,time,price])
    return (
      <div >  
        <div className="flex ">
        <div className="flex flex-col gap-4">
      <div>
      <h1 className="text-1xl font-bold">Level</h1>
       <div>
        {
          levels.map((items)=>(
         <div>
          <input type="checkbox" id={items.id} onChange={handleLevelChange} name={items.name}/>
          {items.level}
         </div>
          ))
        }
       </div>
      </div>
       <div>
       <h1 className="text-1xl font-bold">Prices</h1>
       <div>
        {
          prices.map((items)=>(
         <div>
          <input type="radio" id={items.id} onChange={handlePriceChange} name="price"/>
          {items.price}
         </div>
          ))
        }
       </div>
       </div>
      <div>
      <h1 className="text-1xl font-bold">Styles</h1>
       <div>
        {
          styles.map((items)=>(
         <div>
          <input type="checkbox" onChange={handleStyleChange} name={items.name}/>
          {items.style}
         </div>
          ))
        }
       </div>
      </div>
       <div>
       <h1 className="text-1xl font-bold">Times</h1>
       <div>
        {
          times.map((items)=>(
         <div>
          <input type="checkbox" onChange={handleTimeChange} name={items.name}/>
          {items.time}
         </div>
          ))
        }
       </div>
       </div>
      
    
      </div>
  
        
      </div>
      </div>
    )
  }
  
  export default Filter