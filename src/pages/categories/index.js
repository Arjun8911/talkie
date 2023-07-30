import React, { useEffect, useState } from "react";
import MoviesGenre from "../../component/moviesGenre";
import GenreCard from "../../component/layouts/generCard";
export default function Categories() {
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
    <div className="main">
      <div className="container p-5">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-md-3 mt-4" key={index}>
                <GenreCard title={item.name} class="w-100" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
