import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteRight } from "react-icons/fa";

import "@smastrom/react-rating/style.css";

const Testomonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="my-20">
      <SectionTitle
        heading={"What Our Clients Say"}
        subheading={"TESTIMONIALS"}
      ></SectionTitle>
      <div className="mx-32">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-24 md:mx-48 flex-col items-center mt-8">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  className="mx-auto"
                  readOnly
                />
                <FaQuoteRight className="text-4xl mx-auto text-center my-7 text-yellow-700" />
                <p className="py-8 text-sm">{review.details}</p>
                <p className="text-center text-3xl text-yellow-700">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 
      <div className="bg-[url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg')] h-[70vh]">
        <p className=" bg-white absolute text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est
          suscipit expedita nesciunt debitis rerum. Obcaecati quasi blanditiis
          similique non.
        </p>
      </div> */}
    </div>
  );
};

export default Testomonials;
