import { useState } from "react";
import CastCard from "./castCard";
// swiper carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Mousewheel, Navigation } from "swiper/modules";
export default function MovieCast(props) {
  return (
    <div className="section-carousel overflow-hidden ps-5">
      <div className="section-header mb-3">
        <h2 className="title">Movie Cast</h2>
      </div>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          speed={800}
          navigation={true}
          mousewheel={true}
          modules={[Mousewheel, Navigation]}
          className="mySwiper swiper-overflow"
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide className="swiper-slide-auto-card" key={index}>
                <Link
                  to={`/movie/view/${item.id}`}
                  id={item.id}
                  className=" d-inline-block"
                >
                  <CastCard
                    title={item.title}
                    poster={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    date={item.release_date}
                    rating={item.vote_average}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
