import React from "react";
import UpcomingMovies from "../../component/upcomingMovie";
import TheatreMovies from "../../component/theatreMovies";
import PopularTv from "../../component/popularTv";
import MoviesGenre from "../../component/moviesGenre";
import TopRatedMovies from "../../component/topRatedMovies";
import Hero from "../../component/home/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <TheatreMovies />
      <PopularTv />
      <UpcomingMovies />
      <MoviesGenre />
      <TopRatedMovies />
    </>
  );
}
