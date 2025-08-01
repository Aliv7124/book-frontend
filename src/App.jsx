import React from "react"
import {Routes, Route } from "react-router-dom";
import Home from "./home/Home"
import Course from "./components/Course"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
 

  return (
     <div className="min-h-screen bg-white text-black">
      <Navbar/>
        
   <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
  </div>
  )
}

export default App
