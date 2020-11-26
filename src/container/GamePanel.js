import React from "react";
import List from "./utils/List";
import Option from "./utils/Option";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
export const Question = styled.h2`
  font-size: 1.4rem;
`;
export const AnswersTip = styled.p`
  font-size: 0.75rem;
  opacity: 0.75;
`;
const QuestionWrapper = styled.div`
  display: flex;
  min-height: 12rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 425px) {
    width: 40rem;
    text-align: start;
  }
`;

export default function GamePanel({
  correct,
  pending,
  wrong,
  selectedAnswers,
  clickAnswer,
  question,
  gameOver,
}) {

  const showQuestion = (answers) =>
    answers.map((answer, idx) => {
      const [key, answ] = Object.entries(answer)[0];
      return (
        <Option
          selected={selectedAnswers.includes(key)}
          correct={correct && selectedAnswers.includes(key)}
          pending={pending && selectedAnswers.includes(key)}
          wrong={wrong && selectedAnswers.includes(key)}
          key={idx}
          option={key.toUpperCase()}
          answer={answ}
          select={() => clickAnswer(key)}
        />
      );
    });

  const correctAnswersLength = question?.rightAnswers.length;

  return (
    <>
      {question && (
        <>
          <QuestionWrapper>
            <Question>{question.question}</Question>
            {correctAnswersLength > 1 && (
              <AnswersTip>Possible answers: {correctAnswersLength}</AnswersTip>
            )}
          </QuestionWrapper>
          <List>{showQuestion(question.answers)}</List>
        </>
      )}
      {gameOver && <Redirect to={'/results'}/>}
    </>
  );
}
