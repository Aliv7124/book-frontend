import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
import Card from './Card';

function Freebook() {
  const free=list.filter((data)=>data.category==="free");
  console.log(free);
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  
  return (
    <>
    <div className='mx-6 font-bold text-xl'>
      <h1>Free Offered Course</h1>
       </div>
        <div className='mx-6 '>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid praesentium modi tempore neque eaque ducimus</p>
      </div>

       <div className="slider-container mx-6 full-width">
      <Slider {...settings}>
        {free.map((item)=>(
      <Card item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
   

    </>
  )
}

export default Freebook

