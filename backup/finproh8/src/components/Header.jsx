import { useEffect } from "react";
import { useState } from "react";
import Search from "./Search";

const Header = (props) => {
  const [namaFilm, setNamaFilm] = useState();

  function doSearch() {
    setNamaFilm(document.getElementById("judul").value);
  }

  return (
    <>
      <div style={styles.container}>
        <div style={styles.col}>
          <h1>
            {props.title} - {namaFilm}
          </h1>
          <div style={styles.row}>
            <input placeholder="Search Movie" type="text" id="judul" />
            <button onClick={doSearch}>Search</button>
          </div>
        </div>
        <div>{!namaFilm ? " " : <Search judul={namaFilm} />} </div>
      </div>
    </>
  );
};

export default Header;

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    padding: 2,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
};
