import React, { useState, useEffect } from 'react';

function Question({ onAnswered }) {
  // State to track the remaining time
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // Set up the timeout function to decrease timeRemaining by 1 every second
    const timerId = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timerId);
    };
  }, [timeRemaining]); // Dependency array

  // Check if timeRemaining hits 0
  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10); // Reset timer to 10 seconds
      onAnswered(false); // Trigger the callback with false
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>Time Remaining: {timeRemaining} seconds</h2>
      {/* Render the question and possible answers here */}
    </div>
  );
}

export default Question;