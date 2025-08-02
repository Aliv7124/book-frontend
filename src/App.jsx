import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home"
import Course from "./components/Course"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivateRoute from "./components/PrivateRoute";
/*
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
*/




function App() {
  return (
    <>
     <div className="min-h-screen bg-white text-black">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected Routes */}
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/course"
          element={
            <PrivateRoute>
              <Course />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    <Footer/>
    </div>
    </>
  );
}

export default App;
