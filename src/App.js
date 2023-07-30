import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/layouts/header";
import Footer from "./component/layouts/footer";
import Home from "./pages/home";
import Movies from "./pages/movies";
import MovieDetail from "./pages/movies/view";
import Categories from "./pages/categories";
import Loading from "./component/layouts/loading";
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/view" element={<MovieDetail />}>
            <Route path=":movieId" element={<MovieDetail />} />
          </Route>
          <Route path="movies" element={<Movies />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      )}
      <Footer />
    </BrowserRouter>
  );
}
