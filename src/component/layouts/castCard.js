import React, { useState } from "react";
export default function CastCard(props) {
  const [load, setLoad] = useState(false);
  return (
    <>
      <div className="c-card">
        <img
          src={props.poster}
          onLoad={() => setLoad(true)}
          className={load ? "c-card-cover" : "c-card-cover d-none"}
          alt=""
        />
        <div className="c-card-body">
          <h5 className="text-white">{props.name}</h5>
          <p className="text-secondary">{props.title}</p>
        </div>
      </div>
    </>
  );
}
