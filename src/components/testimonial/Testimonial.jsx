import React from "react";
import "./Testimonial.css";
import Avt2 from "../../assets/avatar2.jpg";
import Avt3 from "../../assets/avatar3.jpg";
import Avt1 from "../../assets/avatar1.jpg";
import Avt4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		avatar: Avt1,
		name: "Tina Snow",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, suscipit esse accusantium corrupti nulla eveniet accusamus, soluta distinctio quo ad rerum quos dolorem blanditiis beatae ea recusandae saepe dolor nihil sapiente officia minima laborum sint?",
	},
	{
		avatar: Avt2,
		name: "Shatta Wale",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, suscipit esse accusantium corrupti nulla eveniet accusamus, soluta distinctio quo ad rerum quos dolorem blanditiis beatae ea recusandae saepe dolor nihil sapiente officia minima laborum sint?",
	},
	{
		avatar: Avt3,
		name: "Kwane Despite",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, suscipit esse accusantium corrupti nulla eveniet accusamus, soluta distinctio quo ad rerum quos dolorem blanditiis beatae ea recusandae saepe dolor nihil sapiente officia minima laborum sint?",
	},
	{
		avatar: Avt4,
		name: "Nana Ama McBrown",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, suscipit esse accusantium corrupti nulla eveniet accusamus, soluta distinctio quo ad rerum quos dolorem blanditiis beatae ea recusandae saepe dolor nihil sapiente officia minima laborum sint?",
	},
];

const Testimonial = () => {
	return (
		<section className="testimonials">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client__avatar">
								<img src={avatar} alt="" />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonial;
