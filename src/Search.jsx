import { useState, useEffect } from "react";
export default function Search({ items }) {
  const [searchOutput, setSearchOutput] = useState([]);
  const [empty, setEmpty] = useState(false);
  const handleSearch = (e) => {
    if (e.target.value == 0) {
      setEmpty(!empty);
    }
    const searchResult = items.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value);
    });
    searchResult.length > 0
      ? setSearchOutput(searchResult)
      : setSearchOutput([{ title: "no result Found" }]);
  };

  useEffect(() => {
    setSearchOutput([]);
  }, [empty]);

  return (
    <div>
      <input
        style={{ width: "300px", height: "20px" }}
        type="text"
        placeholder="search your product?"
        onChange={(e) => handleSearch(e)}
      />

      <div>
        {searchOutput.length > 0 &&
          searchOutput.map((obj, i) => <div key={i}>{obj.title}</div>)}
      </div>
    </div>
  );
}
