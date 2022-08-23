import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  const judul = "FinProH8";

  return (
    <Navbar bg="light">
      {/* <div className="App">
        <Search title="FinProH8" />
      </div> */}
      <Container>
        <Navbar.Brand href="#home">{judul}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Search title="FinProH8" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
