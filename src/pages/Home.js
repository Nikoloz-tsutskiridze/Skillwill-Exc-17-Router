import React from "react";
import { Link } from "react-router-dom";
import Columbus from "./Columbus.jpg";

const Home = () => {
  return (
    <div className="container">
      <h1>Christopher Columbus</h1>
      <img src={Columbus} alt="Christopher Columbus" width="300" />
      <nav>
        <ul>
          <li className="">
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/1">Fact 1</Link>
          </li>
          <li>
            <Link to="/2">Fact 2</Link>
          </li>
          <li>
            <Link to="/3">Fact 3</Link>
          </li>
          <li>
            <Link to="/4">Fact 4</Link>
          </li>
          <li>
            <Link to="/5">Fact 5</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
