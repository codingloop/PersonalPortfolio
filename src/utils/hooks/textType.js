import { useEffect, useState } from "react";

const useTextTypeEffect = (textList) => {
  if (textList?.length > 0) {
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      startTyping(textList[currentIndex] || "");
    }, [currentIndex]);

    const rotateText = () => {
      if (currentIndex + 1 >= textList.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((val) => val + 1);
      }
    };

    const startTyping = (currentText) => {
      let tCounter = 0;
      const textL = currentText.length;
      const typeInterval = setInterval(() => {
        if (tCounter == textL) {
          clearInterval(typeInterval);
          tCounter = 0;
          setTimeout(() => startErasing(currentText), 2000);
          return;
        }
        setText(currentText.slice(0, tCounter + 1));
        tCounter += 1;
      }, 130);
    };

    const startErasing = (currentText) => {
      let rCounter = currentText.length;
      const eraseInterval = setInterval(() => {
        if (rCounter == 0) {
          clearInterval(eraseInterval);
          setTimeout(() => rotateText(), 100);
          return;
        }
        rCounter -= 1;
        setText(currentText.slice(0, rCounter));
      }, 15);
    };

    return text;
  }
  return "";
};

export default useTextTypeEffect;
