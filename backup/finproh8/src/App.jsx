import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [list, setList] = useState([]);
  const judul = "FinProH8";

  const getData = async (props) => {
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
  }, list);

  return (
    <div className="App">
      <Header title={judul} />
    </div>
  );
}

export default App;
