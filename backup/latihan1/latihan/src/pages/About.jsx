import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const About = (props) => {
  const [list, setList] = useState();

  console.log(props.imdbID, "========== judul ============");

  const getData = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=a28eba38&i=${props.imdbID}`
    );
    setList(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Detail Movie</h1>
      {list && (
        <>
          <div>
            <img src={list.Poster} />
          </div>
          <div>Title : {list.Title}</div>
          <div>Year : {list.Year}</div>
          <div>Rated : {list.Rated}</div>
          <div>Released : {list.Released}</div>
          <div>Genre : {list.Genre}</div>
        </>
      )}
    </>
  );
};

export default About;
