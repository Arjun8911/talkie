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
    <MovieHero
      title={data.title}
      overview={data.overview}
      poster={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
      date={data.release_date}
      class="content-active"
    />
    // <main className="main">
    //   <div className="container">
    //     <div className="card-detail">
    //       <div className="card">
    //         <div className="row g-0">
    //           <div className="col-md-3">
    //             <img
    //               src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
    //               className={imgLoad ? "img-fluid" : "img-fluid d-none"}
    //               alt=""
    //               onLoad={() => {
    //                 setImgLoad(true);
    //               }}
    //             />
    //             <img
    //               src="../images/noimg.png"
    //               className={imgLoad ? "d-none" : "img-fluid d-block"}
    //               alt=""
    //             />
    //           </div>
    //           <div className="col-md-9">
    //             <div className="card-body">
    //               <div className="card-body-top">
    //                 <h2 className="mb-4 cbt-rating">
    //                   <i className="bi bi-star-fill rating-color"></i>{" "}
    //                   {data.vote_average}
    //                 </h2>
    //                 <h2 className="card-title">{data.title}</h2>
    //                 <small className="text-muted d-block mb-4">
    //                   Release Date: {data.release_date}
    //                 </small>
    //                 <p className="card-text text-muted text-justify">
    //                   {data.overview}
    //                 </p>
    //               </div>
    //               <div className="card-body-bottom">
    //                 {AppMovies.revenue > 0 ? (
    //                   <h2 className="title">
    //                     <span>
    //                       {AppMovies.revenue > 999999999
    //                         ? "$" + AppMovies.revenue / 1000000000 + "B"
    //                         : "$" + AppMovies.revenue / 1000000 + "M"}
    //                     </span>
    //                     <small>Box office Collecion</small>
    //                   </h2>
    //                 ) : (
    //                   <h2 className="title">
    //                     <span>NA</span>
    //                     <small>Box office Collecion</small>
    //                   </h2>
    //                 )}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
