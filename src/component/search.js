// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// export default function Search() {
//   const [name, setName] = useState("");
//   const [movieFilterd, setMovieFilterd] = useState(null);
//   const [searchList, setSearchList] = useState(false);
//   const movies = useSelector((state) => state.moviefetch);

//   function filterMovie(e) {
//     const keyword = e.target.value;
//     if (keyword !== "") {
//       setSearchList(true);
//       const result = movies.filter((movie) => {
//         return movie.title.toLowerCase().includes(keyword.toLowerCase());
//       });
//       setMovieFilterd(result);
//     } else {
//       setMovieFilterd(null);
//       setSearchList(false);
//     }
//     setName(keyword);
//   }
//   return (
//     <div className="search">
//       <div className="search-input">
//         <i className="bi bi-search search-icon"></i>
//         <input
//           type="text"
//           className="form-control"
//           value={name}
//           placeholder="Search movie by name"
//           onChange={filterMovie}
//         />
//       </div>
//       <div className={searchList ? "search-list" : "search-list d-none"}>
//         {movieFilterd && movieFilterd.length > 0
//           ? movieFilterd.map((movie, index) => {
//               if (index <= 5) {
//                 return (
//                   <Link
//                     key={index}
//                     onClick={() => {
//                       setSearchList(false);
//                       setName("");
//                     }}
//                     to={`/movie/view/${movie.id}`}
//                     id={movie.id}
//                     className="list-item-link"
//                   >
//                     <img
//                       src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
//                       className="li-img"
//                     />
//                     <div>
//                       <span className="li-title">{movie.title}</span>
//                       <small className="li-subtitle">
//                         Release Date: {movie.release_date}
//                       </small>
//                     </div>
//                   </Link>
//                 );
//               }
//             })
//           : ""}
//       </div>
//     </div>
//   );
// }
