import React, {
  useState,
  useEffect
} from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({
  targetDate
}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft,
    setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  const [endingText,
    setEndingText] = useState();

  useEffect(() => {
    const text = "Štabo...";
    const brutality = "Kuopa!!!"
    setEndingText(text);
    setInterval(() => {
      setEndingText(brutality);
    }, 7000);
  },
    []);

  return (
    <div className="timer">
      {timeLeft.days !== undefined ? (
        <div>
          <span>{timeLeft.days} days </span>
          <span>
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </div>
      ): (
        <span className="message">{endingText}</span>
      )}
    </div>
  );
};

export default CountdownTimer;