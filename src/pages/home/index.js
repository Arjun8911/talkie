import React from "react";
import UpcomingMovies from "../../component/upcomingMovie";
import TheatreMovies from "../../component/theatreMovies";
import MoviesGenre from "../../component/moviesGenre";
import TopRatedMovies from "../../component/topRatedMovies";
import Hero from "../../component/home/hero";

export default function Home() {
  return (
    <>
      <div className="section-hero">
        <Hero />
      </div>
      <TheatreMovies />
      <UpcomingMovies />
      <MoviesGenre />
      <TopRatedMovies />
    </>
  );
}
