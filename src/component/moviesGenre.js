import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./layouts/movieCard";
// swiper carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Mousewheel, Navigation } from "swiper/modules";
import GenreCard from "./layouts/generCard";

export default function MoviesGenre() {
  const [data, setData] = useState([]);
  function getData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTRkZmZkZTIzODgyNWQwMzdkZjJhMGU5MTJmZWNlOCIsInN1YiI6IjYyMWRmNTAwOWYxYmU3MDAxYjExN2NjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z5tL5M-c4uvStpT_gqYdNvwtQVEU5ueJibcl3ZkSh6I",
      },
    };
    fetch("https://api.themoviedb.org/3/genre/movie/list", options)
      .then((response) => response.json())
      .then((response) => {
        setData(response.genres);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="section-carousel overflow-hidden ps-5 pt-5">
      <div className="section-header mb-3">
        <h2 className="title">Movies by Genre</h2>
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
              <SwiperSlide className="swiper-slide-auto-card-genre" key={index}>
                <GenreCard title={item.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
