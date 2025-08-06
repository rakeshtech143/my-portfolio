import React, { useEffect, useState } from 'react';
import './progressbar.css';

const ProgressBar = (props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate to target value
    const timeout = setTimeout(() => {
      setWidth((props.value / props.maxValue) * 100);
    }, 100); // delay to animate

    return () => clearTimeout(timeout);
  }, [props.value, props.maxValue]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${width}%` }} />
      {/* <span className="progress-label">{Math.round(width)}%</span> */}
    </div>
  );
};

export default ProgressBar;
