import { Link } from "react-router-dom";
import {
  FiTv,
  FiVideo,
  FiHome,
  FiZap,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";
import { PiFilmSlateLight } from "react-icons/pi";
export default function Header() {
  return (
    <header className="header">
      <nav className="navbar px-5 navbar-expand-lg navbar-light">
        <div className="container-fluid px-0">
          <Link className="navbar-brand" to="/">
            <span className="navbar-brand-icon">
              <PiFilmSlateLight />
            </span>
            <span className="navbar-brand-title">talkie</span>
          </Link>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FiHome className="nav-link-icon" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  <FiVideo className="nav-link-icon" /> Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FiTv className="nav-link-icon" /> tv
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FiZap className="nav-link-icon" /> Streaming
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/movie/search">
                  <FiSearch className="nav-link-icon" /> Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
