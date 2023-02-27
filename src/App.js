import { useState, useEffect } from 'react';

import MathQuestion from './Math-question';

import './App.css';

function App() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    generateQuestionList();
  }, [])

  function getRandomArbitrary(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  function generateQuestion() {
    const firstNumber = getRandomArbitrary(0, 10);
    const answer = getRandomArbitrary(0, 10);
    const secondNumber = answer >= firstNumber ? answer - firstNumber : firstNumber - answer;
    const operator = answer >= firstNumber ? '+' : '-';

    return {firstNumber, operator, secondNumber, answer};
  }

  function generateQuestionList() {
    let list = [];

    for (let i = 0; i < 10; i++) {
      list.push(generateQuestion());
    }

    setQuestionList(list);
  }

  function renderQuestionList(arr) {
    const items = arr.map(({firstNumber, operator, secondNumber, answer}, index) => {
      return (
        <MathQuestion
          key={index}
          firstNumber={firstNumber}
          operator={operator}
          secondNumber={secondNumber}
          answer={answer}/>
      )
    })

    return (
      <div className="question-list">
        {items}
      </div>
    )
  }

  const questionListItems = renderQuestionList(questionList);

  return (
    <main>
      {questionListItems}
    </main>
  )
}

export default App;
