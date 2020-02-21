import React from "react";

import Counter from "./counter";
import Rate from "./rate";

export default class Beer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, rate: 0 };
  }

  render() {
    const { name, ibu, url } = this.props;
    return (
      <section className="beer">
        <div>
          <img src={url} alt="piweczko" onClick={this.addCount} />
        </div>
        <h2>{name}</h2>
        <h4>IBU: {ibu}</h4>
        <Counter count={this.state.count} drink={this.addCount} />
        <Rate rate={this.state.rate} updateRate={this.updateRate} />
      </section>
    );
  }

  updateRate = val => {
    let oldRate = this.state.rate;
    oldRate += val;
    this.setState({ rate: oldRate });
  };

  addCount = () => {
    let oldCont = this.state.count;
    oldCont += 1;
    this.setState({ count: oldCont });
  };
}
