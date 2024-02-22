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
import MyBookings from "./pages/MyBookings";
import store from "./Store";
import { loadUser } from "./Redux/actions/userActions";
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    store.dispatch(loadUser());
  },[dispatch])
  return (
    <div className="mx-32 mt-7 mb-7">
       <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/booking" element={<Booking/>} />
          <Route path="/login"  element={<Login/>}/>
          <Route path="/signUp"  element={<SignUp/>}/>
          <Route path="/filter"  element={<Explore/>}/>
          <Route path="/cardDetails/:id" element={<CardInfo/>}/>
          <Route path="/myBookings" element={<MyBookings/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
