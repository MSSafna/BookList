import { GrFavorite } from "react-icons/gr";
import { useContext, useState } from "react";

import { FavoriteContext } from "./FavoriteContextProvider";

export default function DisplayItems({ items }) {
  const { state, setState } = useContext(FavoriteContext);

  const handleFav = (obj) => {
    setState((prev) => [...prev, obj]);
    console.log(state, "statee");
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "10px",
        justifyContent: "center"
      }}
    >
      {items.map((obj, i) => (
        <div
          key={i}
          style={{
            border: "1px solid black",
            marginLeft: "10px",
            marginTop: "10px"
          }}
        >
          <div>
            <img
              style={{ width: "300px", height: "300px" }}
              src={obj.thumbnail}
            />
          </div>
          <span style={{ fontSize: "20px" }}>
            {" "}
            {obj.title}
            <GrFavorite
              style={{ marginLeft: "10px" }}
              onClick={() => handleFav(obj)}
            />
          </span>
        </div>
      ))}
    </div>
  );
}
