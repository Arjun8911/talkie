import React, { useEffect, useState } from "react";
import MovieCard from "../../component/layouts/movieCard";
import { Link, useParams } from "react-router-dom";
function MoviesCategory() {
  const { slug } = useParams();
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
        `https://api.themoviedb.org/3/movie/${slug}`,
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
    <main className="main">
      <div className="container">
        <div className="">
          <h2 className="title text-center my-4 text-capitalize">
            {slug.split("").map((item) => (item == "_" ? " " : item))} Movies
          </h2>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {data.map((item, index) => (
            <div className="px-2 mb-4" key={index}>
              <Link
                to={`/movie/${item.id}`}
                id={item.id}
                className=" d-inline-block"
              >
                <MovieCard
                  title={item.title}
                  poster={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  date={item.release_date}
                  rating={item.vote_average}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MoviesCategory;
