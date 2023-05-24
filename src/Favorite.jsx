import { useContext } from "react";
import { FavoriteContext } from "./FavoriteContextProvider";
export default function Favorite() {
  const { state, setState } = useContext(FavoriteContext);
  const handleDelete = (i) => {
    setState(
      state.filter((obj) => {
        console.log(i);

        return obj.id != i;
      })
    );
  };
  console.log(state, "srarer");

  return (
    <div>
      {state &&
        state.map((obj, i) => (
          <>
            <h1>{obj.title}</h1>
            <button onClick={() => handleDelete(obj.id)}>Delete</button>
          </>
        ))}
    </div>
  );
}
