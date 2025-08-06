import React, { useEffect, useState } from 'react';

const Counter = ({ begin = 0, end = 100, time = 2000 }) => {
  const [count, setCount] = useState(begin);

  useEffect(() => {
    let start = null;
    const duration = time;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const currentCount = Math.floor(progress * (end - begin) + begin);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [begin, end, time]);

  return <h3>{count}</h3>;
};

export default Counter;
