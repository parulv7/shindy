import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react";
import { Link } from 'react-router-dom';
import "swiper/css";
// import 'swiper/css/autoplay'
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './Head.css'
const Head = () => {
  return (
   <header>
<div className='swiper'>
<Swiper
        slidesPerView={3}
        
       autoplay={
        {
          delay: 2500,
          disableOnInteraction: false,
        }
       }
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <Link to="/info"> <img  className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg" alt="show"/> </Link> </SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg" alt=""/>  </Link> </SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/24/60454.jpg" alt=""/> </Link></SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/200/501970.jpg" alt=""/> </Link></SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/408/1022051.jpg" alt=""/> </Link></SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/155/388118.jpg" alt=""/> </Link></SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/75/189678.jpg" alt=""/> </Link></SwiperSlide>
        
      </Swiper>
</div>


{/* for mobile
<div className='swiper2'>
<Swiper
        slidesPerView={1}
        
       autoplay={
        {
          delay: 2500,
          disableOnInteraction: false,
        }
       }
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <Link to="/info"> <img  className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg" alt="show"/> </Link> </SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg" alt=""/>  </Link> </SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/24/60454.jpg" alt=""/> </Link></SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/200/501970.jpg" alt=""/> </Link></SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/408/1022051.jpg" alt=""/> </Link></SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/155/388118.jpg" alt=""/> </Link></SwiperSlide>
        <SwiperSlide> <Link to="/info"> <img className='head_img' src="https://static.tvmaze.com/uploads/images/original_untouched/75/189678.jpg" alt=""/> </Link></SwiperSlide>
        
      </Swiper> */}
{/* // </div> */}


   </header>
  )
}

export default Head