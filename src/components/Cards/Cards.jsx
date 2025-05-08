import React from "react";
import modul from "./Cards.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { Badge } from "../Badge/Badge";

export const Cards = ({ card }) => {
  const navigate = useNavigate();

  const levelText =
    card.level === 1 ? "primary" : card.level === 2 ? "warning" : "alert";

  const levelCompleted =
    card.completed === true
      ? "success"
      : card.completed === false
      ? "alert"
      : "";

  return (
    <div className={modul.card}>
      <div className={modul.complited}>
        <Badge variant={levelText}>Level: {card.level} </Badge>
        <Badge variant={levelCompleted}>
          {card.completed ? "Completed" : "Not Completed"}
        </Badge>
      </div>
      <div>
        <h5 className={modul.title}>{card.question}</h5>
      </div>
      <div className={modul.answers}>
        <label>short answer:</label>
        <p className={modul.answer}>{card.answer}</p>
      </div>
      <Button
        onClick={() => {
          navigate(`/question/${card.id}`);
        }}
      >
        View
      </Button>
    </div>
  );
};
