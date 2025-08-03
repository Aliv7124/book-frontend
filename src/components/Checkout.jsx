import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [address, setAddress] = useState("");
 const [number,setNumber]=useState("")
 useEffect(() => {
  if (location.state && location.state.item) {
    const book = location.state.item;

    // FIX: set _id from id if needed
    const fixedBook = { ...book, _id: book._id || book.id };

    setItem(fixedBook);
  } else {
    alert("No book selected. Please go back and try again.");
    navigate("/");
  }
}, [location, navigate]);
const handleOrder = async () => {
  if (!address.trim()&& (!number.trim())) {
    alert("Please enter your address.");
    return;
  }
try{


const res = await axios.post("http://localhost:4001/api/orders", {
  bookId: item._id,
  name: item.name,
  price: item.price,
  address,
  number,
  paymentMethod: "COD",
});

    if (res.data.success) {
      alert("Order placed successfully!");
      navigate("/");
    } else {
      alert("Something went wrong!");
    }
  } catch (err) {
    console.error("Order error:", err);
    alert("Order failed. Please try again.");
  }
};



  if (!item) return null;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <p><strong>Book:</strong> {item.name}</p>
        <p><strong>Category:</strong> {item.category}</p>
        <p><strong>Price:</strong> ₹{item.price}</p>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Address:</label>
        <textarea
          className="w-full p-2 border rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address"
        />
      
       <label className="block mb-1 font-medium">Phone number:</label>
        <textarea
          className="w-full p-2 border rounded"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter your delivery address"
        />
      </div>
      <button
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        onClick={handleOrder}
      >
        Confirm Order (COD)
      </button>
    </div>
  );
}

export default Checkout;


