import { useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";

export default function MovieHero(props) {
  const [load, setLoad] = useState(false);
  return (
    <section className={props.class ? `hero ${props.class}` : "hero"}>
      <div className="hero-content px-5">
        <h2 className="hero-title" data-animate="bottom">
          {props.title ? props.title : ""}
        </h2>
        <div className="hero-first-info" data-animate="bottom">
          <span>{props.date ? props.date.slice(0, 4) : ""}</span>
          {props.runtime ? (
            <>
              {" "}
              <PiDotOutlineFill className="dot" />
              <span>
                {Math.floor(props.runtime / 60)}h {props.runtime % 60}m
              </span>
            </>
          ) : (
            ""
          )}

          {props.language ? (
            <>
              <PiDotOutlineFill className="dot" />
              <span>{props.language}</span>
            </>
          ) : (
            ""
          )}
        </div>
        <p className="hero-description" data-animate="bottom">
          {props.overview ? props.overview : ""}
        </p>
        <div className="hero-second-info" data-animate="bottom">
          {props.genre?.map((item, index) => (
            <span key={index}>{item.name}</span>
          ))}
        </div>
      </div>
      <div className="hero-mask"></div>
      <div className="hero-cover">
        <img
          src={props.poster ? props.poster : ""}
          onLoad={() => setLoad(true)}
          className={load ? "" : "d-none"}
          alt=""
        />
      </div>
    </section>
  );
}
