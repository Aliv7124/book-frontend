import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
import { useNavigate } from 'react-router';
function Course() {
  
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
  {list.map((item) => (
    <Card item={item} key={item.id} />
  ))}
</div>






    </>
  )
}

export default Course
