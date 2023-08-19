import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function MoviesSearch() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTRkZmZkZTIzODgyNWQwMzdkZjJhMGU5MTJmZWNlOCIsInN1YiI6IjYyMWRmNTAwOWYxYmU3MDAxYjExN2NjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z5tL5M-c4uvStpT_gqYdNvwtQVEU5ueJibcl3ZkSh6I",
    },
  };
  function filterMovies(e) {
    let keyword = e.target.value;
    if (keyword != "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response.results))
        .catch((err) => console.error(err));
    } else {
      setData();
    }
  }
  return (
    <main className="main">
      <div className="container">
        <div className="">
          <h2 className="title text-center my-4">Search movie by name</h2>
        </div>
        <div>
          <div className="search-input">
            <i className="bi bi-search search-icon"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Enter movie name here"
              onChange={filterMovies}
            />
          </div>
        </div>
        <div className="search-list mt-5">
          {data?.map((item, index) => (
            <Link
              to={`/movie/${item.id}`}
              key={index}
              className="search-list-item"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                className="li-img"
                alt=""
              />
              <div>
                <span className="li-title">{item.title}</span>
                <small className="li-subtitle">
                  Release Date: {item.release_date}
                </small>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
