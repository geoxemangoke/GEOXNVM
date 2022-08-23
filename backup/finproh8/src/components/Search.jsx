import axios from "axios";
import { useEffect, useState } from "react";

const Search = (props) => {
  const [list, setList] = useState([]);
  const [ttl, setTtl] = useState(props.judul);
  const [counter, setCounter] = useState(0);

  const getData = async () => {
    console.log(props.judul, "========== judul ============");
    await axios
      .get(`http://www.omdbapi.com/?apikey=a28eba38&s=${props.judul}`)
      .then((response) => {
        console.log(response.data, "=============== balikan ===========");
        setList(response.data.Search);
      });
  };

  useEffect(() => {
    getData();
  }, ttl);

  return (
    <>
      <h1>Balikan</h1>
      <ul>
        {list.map((imdb, index) => (
          <li key={index}>
            <>
              {imdb.Title} - {counter}
            </>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Search;
