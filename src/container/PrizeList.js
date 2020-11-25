import React from "react";
import { useSelector } from "react-redux";
//import { Step, List } from "../molecules";
import Step from "./utils/Step";
import List from "./utils/List";
import questions from "../question.json";

export default function PrizeList(props) {
  const prize = useSelector((state) => state.prize);
  const sortedQuestions = questions.sort((a, b) => b.prize - a.prize);

  return (
    <List menu={props.menu}>
      {sortedQuestions &&
        sortedQuestions.map((question) => (
          <Step
            key={question.prize}
            currentPrize={question.prize}
            selectedPrize={prize === question.prize}
            disabled={prize > question.prize}
          />
        ))}
    </List>
  );
}
