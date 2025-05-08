import React, { useEffect, useMemo, useRef, useState } from "react";
import { API_URL } from "../../constants/API";
import { QuestionsCards } from "../../components/Questions/QuestionsCards";
import { Loader } from "../../components/Spiner/Loader";
import modul from "./Homepages.module.css";
import { Input } from "../../components/inputId/input";
import Button from "../../components/Button/Button";

const DEFAULT_PAGE = 10;

const Homepages = () => {
  const [params, setParams] = useState(`?_page=1&_per_page=${DEFAULT_PAGE}`);
  const [questions, setQuestions] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [sortState, setSortState] = useState("");

  const controlsContainerRef = useRef();

  useEffect(() => {
    const getQuestions = async () => {
      setIsLoading(true);

      setTimeout(async () => {
        try {
          const responce = await fetch(`${API_URL}/react${params}`);
          const questions = await responce.json();
          setQuestions(questions);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }, 1000);
    };

    getQuestions();
  }, [params]);

  const onSearchInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onSortState = (e) => {
    setSortState(e.target.value);

    setParams(`?_page=1&_per_page=${DEFAULT_PAGE}&${e.target.value}`);
  };

  // Поиск по названию
  const cards = useMemo(() => {
    if (questions?.data) {
      if (inputValue.trim()) {
        return questions.data.filter((d) =>
          d.question.toLowerCase().includes(inputValue.trim().toLowerCase())
        );
      } else {
        return questions.data;
      }
    }
    return [];
  }, [questions][inputValue]);

  const pagination = useMemo(() => {
    const totalCardList = questions?.pages || 0;

    return Array(totalCardList)
      .fill(0)
      .map((_, i) => i + 1);
  });

  const paginationHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      setParams(
        `?_page=${e.target.textContent}&_per_page=${DEFAULT_PAGE}&${inputValue}`
      );
      controlsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={modul.controlsContainer} ref={controlsContainerRef}>
        <Input value={inputValue} onChange={onSearchInputValue} />

        <select
          value={sortState}
          onChange={onSortState}
          className={modul.select}
        >
          <option>Sort by</option>
          <hr />
          <option value="_sort=level">level ASC</option>
          <option value="_sort=-level">level DESC</option>
          <option value="_sort=completed">completed ASC</option>
          <option value="_sort=-completed">completed DESC</option>
        </select>
      </div>

      {isLoading && <Loader />}
      <QuestionsCards cards={cards} />

      {cards.length === 0 ? (
        <p>Нет карточек</p>
      ) : (
        <div className={modul.paginationStyle} onClick={paginationHandler}>
          {pagination.map((value) => {
            return <Button>{value}</Button>;
          })}
        </div>
      )}
    </>
  );
};

export default Homepages;
