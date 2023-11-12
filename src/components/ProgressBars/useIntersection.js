import { useEffect, useState } from "react";

export const useIntersection = (divReference, threshold = 1) => {
  const [isVisible, setIsVisible] = useState(false);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold,
  };
  const load = (e) => {
    if (e[0].isIntersecting) {
      setIsVisible(true);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(load, options);
    observer.observe(divReference.current);
  }, []);
  return { isVisible };
};
