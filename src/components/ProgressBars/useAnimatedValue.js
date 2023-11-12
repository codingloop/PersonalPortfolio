import { useEffect, useState } from "react";

export const useAnimatedValue = (prev, current, duration) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const diff = current - prev;

  useEffect(() => {
    const countEffect = () => {
      if (diff >= 0) {
        if (prev <= current) {
          setAnimatedValue(prev);
          prev++;
        } else {
          clearInterval(interval);
        }
      } else {
        if (prev >= current) {
          setAnimatedValue(prev);
          prev--;
        } else {
          clearInterval(interval);
        }
      }
    };
    const interval = setInterval(countEffect, duration / Math.abs(diff));
  }, [current]);

  return { animatedValue };
};
