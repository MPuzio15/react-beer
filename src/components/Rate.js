import React from "react";

const Rate = props => {
  return (
    <div className="rate-component">
      <button onClick={() => props.updateRate(-0.5)}>-</button>
      <span>Rate is {props.rate}</span>
      <button onClick={() => props.updateRate(0.5)}>+</button>
    </div>
  );
};

export default Rate;
