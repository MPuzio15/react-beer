import React from "react";
import { getAllBeers } from "./services/beerService";
import Beer from "./components/Beer";
import From from "./components/Form";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allBeers: [] };
  }

  componentDidMount() {
    getAllBeers().then(beers => {
      this.setState({
        allBeers: beers
      });
    });
  }

  render() {
    if (this.state.allBeers.length === 0) {
      return <h3>Loading....</h3>;
    }

    const allBeersComponents = this.state.allBeers.map(beer => (
      <Beer name={beer.name} url={beer.imgSrc} ibu={beer.IBU} />
    ));

    return (
      <section>
        <h3>helllo!!!!</h3>
        <From />
        {allBeersComponents}
      </section>
    );
  }
}

export default App;
