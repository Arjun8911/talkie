import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieHero from "../../component/layouts/movieHero";
export default function MovieDetail() {
  let { movieId } = useParams();
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
        `https://api.themoviedb.org/3/movie/${movieId}`,
        options
      );
      let response = await rowdata.json();
      setData(response);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getData();
  }, [movieId]);

  return (
    <>
      <MovieHero
        title={data.title}
        overview={data.overview}
        genre={data.genres}
        poster={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        date={data.release_date}
        class="content-active"
        runtime={data.runtime}
        language={data.original_language}
      />
      <div></div>
    </>
  );
}
