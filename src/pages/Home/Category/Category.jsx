import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slid1 from "../../../assets/home/slide1.jpg";
import slid2 from "../../../assets/home/slide2.jpg";
import slid3 from "../../../assets/home/slide3.jpg";
import slid4 from "../../../assets/home/slide4.jpg";
import slid5 from "../../../assets/home/slide5.jpg";
const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mt-16 mb-16"
    >
      <SwiperSlide>
        <img src={slid1} alt="" />
        <h2  className="text-base md:text-4xl uppercase text-center -mt-20 pb-4 text-white font-thin shadow-lg">Salads</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slid2} alt="" />
        <h2  className="text-base md:text-4xl uppercase text-center -mt-20 text-white font-thin shadow-lg">pizzas</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slid3} alt="" />
        <h2  className="text-base md:text-4xl uppercase text-center -mt-20 text-white font-thin shadow-lg">Soups</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slid4} alt="" />
        <h2  className="text-base md:text-4xl uppercase text-center -mt-20 text-white font-thin shadow-lg">desserts</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slid5} alt="" />
        <h2  className="text-base md:text-4xl uppercase text-center -mt-20 text-white font-thin shadow-lg">Salads</h2>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
