import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import About from "./views/about";
import BoardGames from "./views/boardgames";
import Beers from "./views/beers";
import Header from "./components/header";
import Footer from "./components/footer";

//Główny komponent w naszej aplikacji, mamy tutaj definicję routingu naszej strony
class App extends React.Component {
  render() {
    return (
      // BrowserRouter jest to komponent dostarczony od react-router-dom, przy jego pomocy definiujemy jakie mamy podstrony w naszej aplikacji
      <BrowserRouter>
        {/* Header jest to nasz komponentu, który definiuje header naszej strony - jest on taki sam dla kazdej podstrony */}
        <Header />
        {/* Switch - komponent dostarczony przez react-router-dom - sprawia że jeżeli więcej niż jedna nasza podstrona spełni path zostanie wygenerowana tylko jedna */}
        <Switch>
          {/* Route - komponent dostarczony przez react-router-dom - to te fragmenty będą podmieniane gdy będziemy nawigować między podstronami */}
          {/* Route - powinien dostać przynajmniej dwa propsy - path (ściezka url do naszej podstrony) ; component (komponent który będzie wyrenderowany gdy przejdziemy do konkretnego url'a) */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/games" component={BoardGames} />
          <Route path="/beers" component={Beers} />
        </Switch>

        {/* Footer - nasz komponent - taki sam dla każdej podstrony */}
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
