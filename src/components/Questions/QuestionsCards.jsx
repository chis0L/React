import React, { memo } from "react";
import { Cards } from "../../components/Cards/Cards";
import modul from "./QuestionsCards.module.css";

export const QuestionsCards = memo(({ cards }) => {
  return (
    <div className={modul.cardsList}>
      {cards.map((card, index) => {
        return <Cards card={card} key={index} />;
      })}
    </div>
  );
});
