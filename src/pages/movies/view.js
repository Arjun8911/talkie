import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieHero from "../../component/layouts/movieHero";
export default function MovieDetail() {
  let { movieId } = useParams();
  const [imgLoad, setImgLoad] = useState(false);
  const [data, setData] = useState([]);
  function getData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=814dffde238825d037df2a0e912fece8`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.error(err);
      });
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
