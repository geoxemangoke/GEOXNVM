import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const Search = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div style={styles.container}>
        {/* <div>
            <Header title={props.title} />
          </div> */}
        {props.list && (
          <div>
            <p>Show your favorites Movies</p>
          </div>
        )}
        <div className="row row-cols-4">
          {props.list &&
            props.list.map((imdb, index) => (
              <>
                <div key={index} className="col pb-4">
                  <img src={imdb.Poster} /> <br></br>
                  <a href={`/about?id=${imdb.imdbID}`}>{imdb.Title}</a>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Search;

const styles = {
  container: {
    margin: 5,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  div: {
    columns: "2 auto",
  },
  ul: {
    flexWrap: "wrap",
    display: "flex",
  },
  li: {
    flex: "1 0 25%",
  },
};
