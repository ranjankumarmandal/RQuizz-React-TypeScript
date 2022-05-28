import React from 'react';
import QuestionCard from './components/QuestionCard';

function App() {
  const startTrivia = () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className='App'>
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
