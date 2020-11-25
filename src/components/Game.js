import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../container/Header";
import SideScore from "../container/SideScore";
import GamePanel from "../container/GamePanel";
import PrizeList from "../container/PrizeList";
import { useMediaQuery } from "react-responsive";
import { setPrize } from "../redux/actions";
import questions from "../question.json";

const GameWrapper = styled.main`
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: column;
  padding: 1rem;
  background: var(--bg-gray);
`;

const GameViewUI = styled.div`
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const Game = () => {
  const isMenuOpened = useSelector((state) => state.isMenuOpened);
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [pending, setPending] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    questions && setQuestion(questions.find((question) => question.id === questionId));
    if (questionId > questions.length) {
      setGameOver(true);
    }
  }, [questionId]);

  useEffect(() => {

    if (question && selectedAnswers.length === question.rightAnswers.length) {
      setPending(true);
      setTimeout(() => {
        setPending(false);
        if (selectedAnswers.every((x) => question.rightAnswers.includes(x))) {
          setCorrect(true);
          setTimeout(() => {
            setCorrect(false);
            setQuestionId(questionId + 1);
            setSelectedAnswers([]);
            dispatch(setPrize(question.prize));
          }, 1000);
        } else {
          setWrong(true);
          setTimeout(() => {
            setGameOver(true);
            setSelectedAnswers([]);
          }, 1000);
        }
      }, 2000);
    }
  }, [selectedAnswers]);

  const clickAnswer = (answerKey) => {
    selectedAnswers.includes(answerKey) ?
      setSelectedAnswers(selectedAnswers.filter((answ) => answ !== answerKey))
        :
      setSelectedAnswers([...selectedAnswers, answerKey]);
  };

  return (
    <>
      <GameWrapper>
        {!isLaptop && <Header />}
        {isMenuOpened ? (
          <PrizeList menu questions={questions} />
        ) : (
          <GameViewUI>
            <GamePanel
              correct={correct}
              pending={pending}
              wrong={wrong}
              selectedAnswers={selectedAnswers}
              clickAnswer={clickAnswer}
              question={question}
              gameOver={gameOver}
            />
          </GameViewUI>
        )}
      </GameWrapper>
      {isLaptop && <SideScore />}
    </>
  );
}

export default Game;