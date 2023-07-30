import React, { useState } from "react";
export default function MovieCard(props) {
  const [load, setLoad] = useState(false);
  return (
    <>
      <div className="m-card">
        <img
          src={props.poster}
          onLoad={() => setLoad(true)}
          className={load ? "m-card-cover" : "d-none"}
          alt=""
        />
      </div>
    </>
  );
}
