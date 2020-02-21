import React from "react";

import Beer from "../components/beer";
import { getAllBeers } from "../services/beerService";
export default class Beers extends React.Component {
  constructor(props) {
    super(props);
    //Tworzymy sobie state komponentu w którym będziemy przechowywać informacje o wszystkich piwach
    this.state = { allBeers: [] };
  }

  //W momencie gdy nasz komponent zostanie po raz pierwszy wyrenderowany chcemy wysłać zapytanie do serwera o dane
  componentDidMount() {
    // getAllBeers - wysyłamy zapytanie do serwera i czekamy aż promise będzie fulfilled 
    getAllBeers().then(beers => {
      //gdy promise będzie fulfilled wrzucamy aktualizujemy state komponentu - dziękie czemu komponent zostanie od nowa wyrenderowany (bo aktualizujemy state)
      this.setState({ allBeers: beers });
    });
  }

  render() {
    //jeżeli nie mamy żadnych piw nasz komponent renderuje napis loading
    if (this.state.allBeers.length === 0) {
      return <h1>Loading...</h1>;
    }

    //gdy mamy dane, dla każdego obiektu w tablicy this.state.allBeers - generujemy nowy react komponent - Beer - i przekazujemy mu odpowiednie dane
    const allComponents = this.state.allBeers.map((beer, index) => {
      return (
        <Beer name={beer.name} ibu={beer.IBU} url={beer.imgSrc} key={index+'daj-sobie-beer'} />
      );
    });

    //Następie renderujemy te wszystkie komponenty wewnątrz article
    return <article>{allComponents}</article>;
  }
}
