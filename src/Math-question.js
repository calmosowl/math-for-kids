import { useState } from "react";

const MathQuestion = ({firstNumber, operator, secondNumber, answer}) => {
  const [inputClass, setInputClass] = useState('');

  function checkResult(e) {
    if (e.key === 'Enter') {
      if (+e.target.value === answer) {
        setInputClass('success')
      } else {
        setInputClass('error')
      }
    }

    if (e.key === 'Backspace') {
      setInputClass('')
    }
  }

  return (
    <div className="question-item">
      <div>{firstNumber}</div>
      <div>{operator}</div>
      <div>{secondNumber}</div>
      <div>=</div>
      <input onKeyDown={(e) => checkResult(e)} className={inputClass} type="text" />
    </div>
  )
}

export default MathQuestion;