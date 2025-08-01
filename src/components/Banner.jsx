import React from 'react';
import banner from '../assets/banner.jpg'

function Banner() {
  return (
    <>
     <div className="flex my-12 mx-6">
  <div className="w-1/2 p-4">
    <h2 className="text-3xl font-semibold">
      Hello, welcome here to learn something new{" "}
      <span className="text-pink-500">everyday</span>!!!
    </h2>
    <p className='my-6 text-1xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quam et reiciendis cumque, neque provident vero nemo error reprehenderit debitis dignissimos. Molestiae repudiandae ab tempore non laborum distinctio quis reiciendis.</p>
 <div className="w-full mt-12">
  <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 shadow-sm bg-white w-full max-w-md">
    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2.5"
        fill="none"
        stroke="currentColor"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </g>
    </svg>
    <input
      type="email"
      placeholder="@email"
      required
      className="w-full bg-white outline-none text-gray-800 placeholder-gray-400"
    />
  </label>
</div>
<button className="btn btn-secondary my-6">Secondary</button>
  </div>

<div className="w-1/2 p-4">
  <img src={banner} alt="books" className="w-full h-auto rounded-lg shadow-md" />
</div>
  </div>
    </>
  )
}

export default Banner
