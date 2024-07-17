import React from 'react';
import CountdownTimer from './CountdownTimer';
import "./Counter.css";

const App = () => {
  const targetDate = '2024-08-30T12:00:00';

  return (
    <div className="counter">
      <h1>Countdown To The End Of Štabo Kuopa!</h1>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default App;