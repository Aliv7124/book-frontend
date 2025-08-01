import React from 'react'

function Card({item}) {
  return (
    <>
      <div className="card mx-12 bg-base-100 w-96 shadow-sm my-6 hover:scale-105 duration-200">
  <figure>
    <img
    src={item.image}
      alt="book" />
  </figure>
  <div className="card-body bg-white">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.category}</p>
    <p>Price:{item.price}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-500">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
