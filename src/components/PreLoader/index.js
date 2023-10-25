import LinearProgressBar from "@/components/LinearProgressBar";
import style from "./style.module.css";
import { useEffect, useState } from "react";

export default function PreLoader({ userFullName, progressBarColor }) {
  const [progress, setProgress] = useState("0%");
  useEffect(() => {
    completeProgress();
  }, []);

  const completeProgress = () => {
    var width = 0;
    const id = setInterval(increaseProgress, 25);

    function increaseProgress() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width += 1;
        setProgress(`${width}%`);
      }
    }
  };

  return (
    <div className={style.preloader}>
      <div className={style.preloader_content}>
        <h4>{userFullName}</h4>
        <div className={style.preloader_load}>
          <LinearProgressBar progress={progress} stroke={progressBarColor} />
        </div>
      </div>
    </div>
  );
}
