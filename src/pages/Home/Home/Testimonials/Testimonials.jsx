import { useEffect, useState } from "react";
import SectionTile from "../../../../components/SectionTitle/SectionTile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import svg from '../../../../assets/home/quote-left 1.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviesws] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviesws(data);
      });
  }, []);
  return (
    <section className="my-16">
      <SectionTile
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTile>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col justify-center items-center mx-24 my-16 text-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <img className="w-[60px] py-2" src={svg} alt="" />
              <p className="py-2">{review.details}</p>
              <h3 className="text-2xl text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
