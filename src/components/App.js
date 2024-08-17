import React, { useState } from 'react';
import Question from './Question'; // Import the Question component

function App() {
  const [score, setScore] = useState(0);

  // Function to handle when a question is answered
  const handleAnswered = (wasCorrect) => {
    if (wasCorrect) {
      setScore(score + 1);
    }
    // You can also add logic to load the next question or handle the end of the quiz here
  };

  return (
    <div className="App">
      <h1>Trivia App</h1>
      <h2>Score: {score}</h2>
      {/* Render the Question component and pass the handleAnswered function as a prop */}
      <Question onAnswered={handleAnswered} />
    </div>
  );
}

export default App;