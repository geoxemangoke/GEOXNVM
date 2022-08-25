import { Link } from "react-router-dom";

const NoMatchError = () => {
  return (
    <>
      <div className="container">
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </>
  );
};

export default NoMatchError;
