import { useEffect, useState } from 'react';

export const useTimer = (time: number, startTimer: boolean) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0 || finished) {
            clearInterval(timer);
            setFinished(true);

            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [finished, startTimer]);

  return { timeLeft, finished, setFinished };
};
