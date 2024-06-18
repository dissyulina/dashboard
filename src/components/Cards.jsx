import React from "react";
import Card from "./Card";
import data from "../data/info.json";

function Cards() {
  const cards = data.cards;

  return (
    <>
      {
        cards && cards.length > 0 &&
        cards.map(card => <Card key={card._id} card={card}/>)
      }     
    </>
  )
}

export default Cards;