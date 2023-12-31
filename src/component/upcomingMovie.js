import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./layouts/movieCard";
// swiper carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Mousewheel, Navigation } from "swiper/modules";
import { BsChevronRight } from "react-icons/bs";

export default function UpcomingMovies() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTRkZmZkZTIzODgyNWQwMzdkZjJhMGU5MTJmZWNlOCIsInN1YiI6IjYyMWRmNTAwOWYxYmU3MDAxYjExN2NjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z5tL5M-c4uvStpT_gqYdNvwtQVEU5ueJibcl3ZkSh6I",
    },
  };
  async function getData() {
    try {
      let rowdata = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        options
      );
      let response = await rowdata.json();
      setData(response.results);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="section-carousel overflow-hidden ps-5 pt-5">
      <div className="section-header mb-3 pe-5">
        <h2 className="title">Upcoming Movies</h2>
        <Link
          to={`/movies/category/upcoming`}
          className="link"
          id="now_playing"
        >
          View All <BsChevronRight />
        </Link>
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
                  to={`/movie/${item.id}`}
                  id={item.id}
                  className=" d-inline-block"
                >
                  <MovieCard
                    title={item.title}
                    poster={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    date={item.release_date}
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
