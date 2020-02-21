import React from "react";
import Rate from "./rate";

const BoardGameItem = props => {
  return (
    <section>
      <h3>{props.name}</h3>
      <img src={props.imgUrl} alt="planszowka" />
      <a href={props.url}>Kup teraz!!!</a>
      <Rate rate={props.rate} />
    </section>
  );
};

export default BoardGameItem;
