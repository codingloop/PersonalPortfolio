import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";

export default function CircularProgressBar({
  progress,
  stroke,
  backgroundColor,
  progressName,
}) {
  return (
    <div className="text-center">
      <div
        className={`${style.circular_progress}`}
        style={{
          "--progressPercent": progress,
          "--bgColor": backgroundColor,
          "--stroke": stroke,
        }}
      >
        {progress}%
      </div>
      {progressName && <div className="mt-2">{progressName}</div>}
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
  progressName: PropTypes.string,
};
