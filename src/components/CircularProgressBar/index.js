import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";

export default function CircularProgressBar({
  progress,
  stroke,
  backgroundColor,
}) {
  const ref = useRef();
  useEffect(() => {
    // ref.current.style.background = `radial-gradient(closest-side, ${backgroundColor} 79%, transparent 80% 100%), conic-gradient(${stroke} ${progress}, ${backgroundColor} 0)`;
  }, []);

  return (
    <div
      ref={ref}
      className={`${style.circular_progress} before:content-['calc(var(--progress-value) * 1%)'] `}
      style={{
        "--progress": progress,
        "--bgColor": backgroundColor,
        "--stroke": stroke,
      }}
    >
      <progress
        className="hidden w-0 h-0"
        min="0"
        max="100"
        value="92"
      ></progress>
    </div>
  );
}

CircularProgressBar.defaultProps = {
  backgroundColor: "white",
  stroke: "blue",
};

CircularProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  stroke: PropTypes.string,
};
