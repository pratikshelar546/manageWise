import React from 'react'
import Slider from "react-slick";
import { NextArrow, PrevArrow } from './Arrows';

const Slick = () => { const comments = [
    {
      coms: "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
      name: "Emily",
      prof: "Art Director",
      image:
        "https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg",
    },
    {
      coms: "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
      name: "Alex",
      prof: "IT manager",
      image:
        "https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg",
    },
    {
      coms: "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
      name: "Sarah",
      prof: "Project Manager",
      image:
        "https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg",
    },
    {
      coms: "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
      name: "David",
      prof: "Freelancer",
      image:
        "https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg",
    },
  ];
  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div> <div className="flex w-full h-full relative">
    <Slider {...settings} className=' '>
    
      {
          comments.map((data) => (
              <>

          <img src={data.image} alt="d" />
          <h1>{data.prof}</h1>
          </>
      ))}

      
         
    </Slider>
      </div></div>
  )
}

export default Slick