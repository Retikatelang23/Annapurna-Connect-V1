import React, { useState, useEffect } from 'react';

const CounterUp = ({ initialValue, delay, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let requestId;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const nextValue = Math.ceil(progress * initialValue);
      setCount(nextValue);

      if (progress < 1) {
        requestId = requestAnimationFrame(updateCount);
      }
    };

    requestId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(requestId);
  }, [initialValue, delay, duration]);

  return <span>{count}</span>;
};

export default CounterUp;
