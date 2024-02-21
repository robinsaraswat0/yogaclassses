import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Booking from './pages/Booking';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClasses } from "./Redux/actions/yogaClassActions";
import Explore from "./pages/Explore";
import CardInfo from "./pages/CardInfo"

function App() {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getClasses(""))
  // },[dispatch])
  return (
    <div className="mx-32 mt-7 mb-7">
       <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/booking" element={<Booking/>} />
          <Route path="/login"  element={<Login/>}/>
          <Route path="/signUp"  element={<SignUp/>}/>
          <Route path="/filter"  element={<Explore/>}/>
          <Route path="/cardDetails/:id" element={<CardInfo/>}/>
      </Routes>
        
    </div>
  );
}

export default App;