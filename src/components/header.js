import React from "react";
import { Link } from "react-router-dom"; //Jeżeli robimy odnośniki do naszych podstron używamy komponentu Link dostarczony od react-router-dom

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/games">Games</Link>
        <Link to="/beers">Beers</Link>
{/* 
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/games">Games</a>
        <a href="/beers">Beers</a> */}
      </nav>
    </header>
  );
};

export default Header;
