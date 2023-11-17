import LinearProgressBar from "@/components/LinearProgressBar";
import style from "./style.module.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/utils/providers/userInfo";

export default function PreLoader({ onComplete }) {
  const userInfo = useContext(UserContext);
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
        onComplete();
      } else {
        width += 1;
        setProgress(`${width}%`);
      }
    }
  };

  return (
    <div className={`${style.preloader}`}>
      <div className={style.preloader_content}>
        <h4>{userInfo?.userFullName}</h4>
        <div className={style.preloader_load}>
          <LinearProgressBar
            progress={progress}
            stroke={userInfo?.progressBarColor}
          />
        </div>
      </div>
    </div>
  );
}
