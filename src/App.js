import React, {useState, useEffect} from 'react';
import './App.css';

import Start from './components/Start'
import Question from './components/Question'
import End from './components/End'
import Modal from './components/Modal'
import quizData from './data/quiz.json'


const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const quizStartHandler = () => {
    setStep(2);
  }

  return (
    <div className="App">
      { step === 1 && <Start onQuizStart={quizStartHandler} /> }
      { step === 2 && <Question 
        data = {quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}

      {step===3 && <End 
        results = {answers}
        data = {quizData.data}
        onAnswersCheck={() => {setShowModal(true)}}
      />}

      {showModal && <Modal
      onClose={() => setShowModal(false)}
      results={answers}
      data={quizData.data} />}
    </div>
  );
}

export default App;
