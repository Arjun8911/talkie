import React from "react";
export default function GenreCard(props) {
  return (
    <>
      <div className={props.class ? `g-card ${props.class}` : "g-card"}>
        <h3 className="g-card-title m-0">{props.title}</h3>
      </div>
    </>
  );
}
