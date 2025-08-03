import React from 'react'
import axios from 'axios'
import Card from './Card'
import { data, useNavigate } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
function Course() {
  const[book,setBook]=useState([]);
   useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-ke78.onrender.com/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook(); 
  }, []);

const navigate = useNavigate();
  return (
    <>
    <div className='container'>
      <h1 className="my-6 mx-4 flex justify-center text-center text-4xl font-semibold">
  We are delighted to have you <span className='mx-2 text-pink-500'>here</span>
</h1>

<div className="flex justify-center my-12 mx-4 ">
  <button className="bg-pink-500 text-sm px-3 py-1 rounded text-white cursor-pointer"  onClick={() => navigate("/")}>Back</button>
</div>

</div>
<div className="mx-12 grid grid-cols-1 md:grid-cols-3 gap-4">
  {book.map((item) => (
    <Card item={item} key={item.id} />
  ))}
</div>






    </>
  )
}

export default Course
