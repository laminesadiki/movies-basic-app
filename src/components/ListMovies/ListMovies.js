import React, { useEffect, useState } from "react";
// import Banner from '../Banner/Banner';
import Card from "../Card/Card";
import "./ListMovies.css";
import axios from "axios";

function ListMovies() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const response = await axios.get(`http://localhost:5000/movies`);
    const data = await response.data;
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, [movies]);

  return (
    <div className="home">
      <div className="home__section">
        {movies.map((movie, index) => (
          <Card movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ListMovies;
