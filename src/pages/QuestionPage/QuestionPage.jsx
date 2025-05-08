import React, { useEffect, useId, useState } from "react";
import modul from "./QuestionPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Badge } from "../../components/Badge/Badge";
import { API_URL } from "../../constants/API";

// const card = {
//   id: "1",
//   question: "Что такое React?",
//   answer: "React — это библиотека для создания пользовательских интерфейсов.",
//   description:
//     "React — это JavaScript-библиотека, разработанная Facebook, которая используется для построения UI с компонентным подходом. React позволяет вам создавать пользовательские интерфейсы из отдельных частей, называемых компонентами.",
//   resources: ["https://react.dev", "https://react.dev/reference/react"],
//   level: 1,
//   completed: true,
//   editDate: "03.02.2025, 19:49",
// };

export const QuestionPage = () => {
  const checkboxId = useId();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  const [card, setCard] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getQuestions = async () => {
      // setIsLoading(true);

      setTimeout(async () => {
        try {
          const responce = await fetch(`${API_URL}/react/${id}`);
          const data = await responce.json();
          setCard(data);
        } catch (error) {
          console.log(error);
        } finally {
          // setIsLoading(false);
        }
      });
    };
    getQuestions();
  }, []);

  const updateCard = async () => {
    setTimeout(async () => {
      try {
        const responce = await fetch(`${API_URL}/react/${id}`, {
          method: "PATCH",
          body: JSON.stringify({ completed: isChecked }),
        });
        const data = await responce.json();
        setCard(data);
      } catch (error) {
        console.log(error);
      } finally {
        //
      }
    });
  };

  const onCheckbox = () => {
    updateCard(!isChecked);
    setIsChecked(!isChecked);
  };

  const levelText = () =>
    card.level === 1 ? "primary" : card.level === 2 ? "warning" : "alert";

  const levelCompleted = () =>
    card.completed === true
      ? "success"
      : card.completed === false
      ? "alert"
      : "";

  return (
    <>
      {card !== null && (
        <div className={modul.container}>
          <div className={modul.complited}>
            <Badge variant={levelText()}>Level: {card.level} </Badge>
            <Badge variant={levelCompleted()}>
              {card.completed ? "Completed" : "Not Completed"}
            </Badge>
          </div>
          <div>
            <h5 className={modul.title}>{card.question}</h5>
            <p className={modul.cardDescription}>{card.description}</p>
          </div>

          <label htmlFor={checkboxId} className={modul.cardCheckbox}>
            <input
              type="checkbox"
              id={checkboxId}
              className={modul.checkbox}
              checked={isChecked}
              onChange={onCheckbox}
              disabled={false}
            />
            <span>mark question as completed</span>
          </label>
          <Button
            onClick={() => {
              navigate(`/`);
            }}
          >
            Back
          </Button>
        </div>
      )}
    </>
  );
};
