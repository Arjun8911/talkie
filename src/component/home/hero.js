import React, { useEffect, useState } from "react";
// swiper carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import MovieHero from "../layouts/movieHero";

export default function Hero() {
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
    fetch("https://api.themoviedb.org/3/trending/movie/day", options)
      .then((response) => response.json())
      .then((response) => {
        setData(response.results.filter((item) => item.vote_count > 1000));
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <Swiper
        speed={800}
        effect={"fade"}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide className="swiper-slide-auto-full" key={index}>
              <MovieHero
                title={item.title}
                poster={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                date={item.release_date}
                overview={item.overview}
                genre={item.genre_ids}
                language={item.original_language}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
