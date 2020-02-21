import React from "react";
import { getAllBoardGames } from "../services/boardService";
import BoardGameItem from "../components/boardGameItem";

export default class BoardGames extends React.Component {
  constructor(props) {
    super(props);
    //Tworzymy sobie state komponentu w którym będziemy przechowywać informacje o wszystkich grach planszowych
    this.state = { allBoardGames: [] };
  }

  //W momencie gdy nasz komponent zostanie po raz pierwszy wyrenderowany chcemy wysłać zapytanie do serwera o dane
  componentDidMount() {
    //getAllBoardGames - metoda która wysyła zapytanie (jest to mock * w celach testowych udajemy zapytanie do serwera) i zwraca promise
    getAllBoardGames().then(games => {
      //gdy promise będzie fulfilled wrzucamy aktualizujemy state komponentu - dziękie czemu komponent zostanie od nowa wyrenderowany
      this.setState({
        allBoardGames: games
      });
    });
  }

  render() {
    //jeżeli nie mamy żadnych gier nasz komponent renderuje napis loading
    if (this.state.allBoardGames.length === 0) {
      return <h1>Loading...</h1>;
    }

    //gdy mamy dane, dla każdego obiektu w tablicy this.state.allBoardGames - generujemy nowy react komponent - BoardGameItem
    const allBoardGameComponents = this.state.allBoardGames.map((game, i) => {
      return (
        <BoardGameItem
          name={game.name}
          rate={game.rate}
          url={game.url}
          imgUrl={game.imgUrl}
          key={i + "game"}
        />
      );
    });

    //Następie renderujemy te wszystkie komponenty wewnątrz article
    return <article>{allBoardGameComponents}</article>;
  }
}
