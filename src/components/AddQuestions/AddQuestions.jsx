import React, { useActionState } from "react";
import modul from "./AddQuestions.module.css";
import Button from "../Button/Button";
import { API_URL } from "../../constants/API";
import { Loader } from "../Spiner/Loader";

const createCardAction = async (_prevState, formData) => {
  try {
    const newQuestion = Object.fromEntries(formData);

    const response = await fetch(`${API_URL}/react`, {
      method: "POST",
      body: JSON.stringify({
        question: newQuestion.question,
        answer: newQuestion.answer,
        description: newQuestion.description,
        level: Number(newQuestion.level),
        completed: false,
      }),
    });
    const question = response.json();
    return question;
  } catch (error) {
    console.log(error);
  }
};

const AddQuestions = () => {
  const [formState, formAction, isPending] = useActionState(createCardAction, {
    clearForm: false,
  });
  return (
    <>
      {isPending && <Loader />}
      <h1 className={modul.formTitle}>AddQuestions</h1>

      <div className={modul.formContainer}>
        <form action={formAction} className={modul.form}>
          <div className={modul.formControl}>
            <label htmlFor="questionField">Question: </label>
            <textarea
              defaultValue={"defaultValue"}
              name="question"
              id="questionField"
              cols="30"
              rows="2"
              required
              placeholder="please enter a question"
            ></textarea>
          </div>

          <div className={modul.formControl}>
            <label htmlFor="questionField">Short Answer: </label>
            <textarea
              defaultValue={"defaultValue"}
              name="answer"
              id="answerField"
              cols="30"
              rows="2"
              required
              placeholder="please enter a short answer"
            ></textarea>
          </div>

          <div className={modul.formControl}>
            <label htmlFor="questionField">Description: </label>
            <textarea
              defaultValue={"defaultValue"}
              name="description"
              id="descriptionField"
              cols="30"
              rows="2"
              required
              placeholder="please enter a full description"
            ></textarea>
          </div>

          <div className={modul.formControl}>
            <label htmlFor="questionField">Description: </label>
            <select name="level" id="levelField" defaultValue={"defaultValue"}>
              <option disabled>Question level</option>
              <hr />
              <option value="1">1 - easiest</option>
              <option value="2">2 - medium</option>
              <option value="3">3 - hardest</option>
            </select>
          </div>

          <label htmlFor="clearFormField" className={modul.clearFormField}>
            <input
              className={modul.input}
              type="checkbox"
              name="checkbox"
              id="clearFormField"
              defaultChecked={formState.clearForm}
            ></input>
            <span>clear worm after submit</span>
          </label>

          <Button isDisabled={isPending}>Add question</Button>
        </form>
      </div>
    </>
  );
};
export default AddQuestions;
