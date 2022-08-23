import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const NavBar = (props) => {
    console.log(props.title);
  const [counter, setCounter] = useState(0);
  const [namaFilm, setNamaFilm] = useState();
  const [flag, setFlag] = useState(0);

  function doSearch() {
    setNamaFilm(document.getElementById("judul").value);
    setFlag(1);
  }

  useEffect(() => {
    if (flag === 1) {
        props.handleMovieCollection([]);
      getData();
      setFlag(0);
    }
  }, [flag]);

  const getData = async () => {
    console.log(props.judul, "========== judul ============");
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=a28eba38&s=${namaFilm}`
    );
    props.handleMovieCollection(res.data.Search);
  };

  const incrementCount = () => {
    // Update state with incremented value
    setCounter(counter + 1);
  };

    return (
        <nav className="nav">
            <a href="/" className="site-title">{props.title}</a>
            <ul>
                <li >
                <input className="input-textbox" placeholder="Search Movie" type="text" id="judul" />
                <button className="button" onClick={doSearch}>Search</button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar