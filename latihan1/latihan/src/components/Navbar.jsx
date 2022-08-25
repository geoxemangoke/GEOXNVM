import axios from "axios";
import { useEffect, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const [counter, setCounter] = useState(0);
  const [namaFilm, setNamaFilm] = useState();
  const [flag, setFlag] = useState(0);
  const navigate = useNavigate();
  
  function doSearch(e) {
    e.preventDefault();

    navigate(generatePath(`:url?s=:queryString`, {
      url: "/search",
      queryString: `${document.getElementById("judul").value}`
    }));

    setNamaFilm(document.getElementById("judul").value);
    setFlag(1);
  }

  const getData = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=a28eba38&s=${namaFilm}`
    );
    props.handleMovieCollection(res.data.Search);
  };

  useEffect(() => {
    if (flag === 1) {
        props.handleMovieCollection([]);
      getData();
      setFlag(0);
    }
  }, [flag]);

  const incrementCount = () => {
    // Update state with incremented value
    setCounter(counter + 1);
  };

    return (
      <div className="header bg-warning">
        <div className="container">
          <nav className="navbar navbar-light">
              <a href="/" className="navbar-brand fw-bold fs-4">{props.title}</a>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 input-textbox"
                  type="text"
                  id="judul"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button className="button btn btn-dark" onClick={doSearch}>
                  Search
                </button>
              </form>
          </nav>
        </div>
      </div>
    )
}

export default NavBar;