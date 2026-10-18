import { useState, useEffect } from 'react';

export function useStopwatch(isRunning: boolean) {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function: clears interval when isRunning becomes false or component unmounts
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  return { seconds };
}