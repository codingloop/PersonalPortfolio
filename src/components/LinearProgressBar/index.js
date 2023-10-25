import PropTypes from "prop-types";

export default function LinearProgressBar({
  progress,
  height,
  backgroundColor,
  stroke,
  displayText,
}) {
  return (
    <>
      <div className={`w-100`} style={{ backgroundColor }}>
        <div
          className={`ease`}
          style={{ height, backgroundColor: stroke, width: progress }}
        ></div>
      </div>
      {displayText === true && <div className={`mt-2`}>{progress}</div>}
    </>
  );
}

LinearProgressBar.defaultProps = {
  height: "5px",
  backgroundColor: "black",
  stroke: "white",
  displayText: true,
};

LinearProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  stroke: PropTypes.string,
  displayText: PropTypes.bool,
};
