import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const isLoading = movies.length === 0;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=a28eba38&s=avengers`);
      setMovies(res.data.Search);
    }
    getData();
  }, []);

  return (
    <>
      <div className="container mt-3">
        {
        isLoading ? <Loading /> :
          movies &&
          <div className="fs-3 fw-bold">
            <p>Show your favorites Movies</p>
          </div>
        }
        <div className="row row-cols-4">
          {
          movies.map((data, index) => (
              <>
                <div key={index} className="col-lg-3 align-items-stretch pb-4">
                  <div className="card">
                      <img src={data.Poster} className="card-img-top" alt={data.Title}/>
                      <div className="card-body bg-dark text-center">
                          <a href={`/about?id=${data.imdbID}`} className="card-link text-light">{data.Title}</a>
                      </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
