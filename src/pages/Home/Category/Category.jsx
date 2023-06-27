import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <div>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subheading={" From 11:00am to 10:00pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="-mt-20 text-center text-white text-4xl uppercase tracking-wide ">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="-mt-20 text-center text-white text-4xl uppercase tracking-wide ">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="-mt-20 text-center text-white text-4xl uppercase tracking-wide ">
            Soup
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="-mt-20 text-center text-white text-4xl uppercase tracking-wide ">
            Dessert
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="-mt-20 text-center text-white text-4xl uppercase tracking-wide ">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
