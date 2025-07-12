
import { useEffect, useState, useRef } from "react";
const AnimatedNumber = ({ value, color }) => {
  const [display, setDisplay] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current === value) return;
    let start = prevValue.current;
    let end = value;
    let frame;
    const duration = 400;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.round(start + (end - start) * progress);
      setDisplay(current);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        prevValue.current = value;
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);
console.log(`AnimatedNumber value changed: ${value}, display: ${display}, prevValue: ${prevValue.current}`);
  return (
    <span
      style={{
        color,
        transition: "color 0.3s, font-size 0.3s",
        fontWeight: 700,
        fontSize: "1.25em",
        filter: "drop-shadow(0 1px 2px #b3d1ff)",
      }}
    >
      {display}
    </span>
  );
};

export default AnimatedNumber;