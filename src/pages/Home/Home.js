import React from "react";
// import Banner from '../Banner/Banner';
// import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ListMovies from "../../components/ListMovies/ListMovies";
// import "./Home.css";



function Home() {
  return (
    <div className="home">
      <Header />
      <ListMovies />
      <Footer />
    </div>
  );
}

export default Home;
