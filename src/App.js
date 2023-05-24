import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import DisplayItems from "./DisplayItems";

import Favorite from "./Favorite";
import { FavoriteContextProvider } from "./FavoriteContextProvider";

export default function App() {
  const [data, setData] = useState([]);
  const fetchingData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setData(response.data.products);
  };
  const [showFav, setFav] = useState(false);
  useEffect(() => {
    fetchingData();
  }, []);
  console.log();

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <button
            style={{ marginRight: "5px" }}
            onClick={() => setFav(!showFav)}
          >
            Favorite
          </button>
        </div>

        <Search items={data} />
      </div>
      <FavoriteContextProvider>
        {showFav ? <Favorite /> : <DisplayItems items={data} />}
      </FavoriteContextProvider>
    </div>
  );
}
