import { useEffect, useRef } from "react";
import style from "./style.module.css";
import { useIntersection } from "./useIntersection";

const SkillProgress = ({ progress, stroke = "white" }) => {
  const progressRef = useRef();
  const { isVisible } = useIntersection(progressRef);

  useEffect(() => {
    if (isVisible) {
      progressRef.current.classList.add(style.animate);
      progressRef.current.style.setProperty("--progressPercent", progress);
    }
  }, [isVisible]);

  return (
    <div className={`w-full my-2 ${style.skill_progress_container}`}>
      <div className="relative bg-black">
        <div
          ref={progressRef}
          className={`${style.progress_bar}`}
          style={{ "--background": stroke }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
