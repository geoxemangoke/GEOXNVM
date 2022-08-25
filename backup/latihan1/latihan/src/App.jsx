import logo from "./logo.svg";
import "./App.css";
import { Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function App() {
  const judul = "FinProH8";
  // console.log(window.location);
  const [list, setList] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("id"), "=========== App 1 ==========");

  let component;

  if (window.location.pathname.includes("about")) {
    component = <About imdbID={searchParams.get("id")} />;
  }
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />;
  //     break;
  //   case "/pricing":
  //     component = <Pricing />;
  //     break;
  //   case "/about":
  //     component = <About />;
  //     break;
  // }
  return (
    <>
      <NavBar handleMovieCollection={setList} title="FinProH8" />
      <Search list={list} />
      {component}
    </>
  );
}

export default App;
