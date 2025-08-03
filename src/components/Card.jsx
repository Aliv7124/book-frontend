import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ item }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    const itemToSend = {
      ...item,
      _id: item.id,
    };
    navigate('/checkout', { state: { item: itemToSend } });
  };

  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-sm my-4 mx-auto sm:mx-6 hover:scale-105 duration-200">
      <figure>
        <img src={item.image} alt="book" className="w-full h-60 object-cover" />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.category}</p>
        <p>Price: {item.price}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-pink-500 text-white" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;


