import { useContext, useEffect, useRef } from "react";
import CardsContainer from "./_CardsContainer";
import Header from "./_Header";
import Summary from "./_Summary";
import style from "./style.module.css";
import { UserContext } from "@/utils/providers/userInfo";

export default function Content({ showLeftMenu, setShowLeftMenu }) {
  const userInfo = useContext(UserContext);
  const contentRef = useRef();

  const closeLeftMenu = () => setShowLeftMenu(false);
  useEffect(() => {
    if (contentRef) {
      console.log("set event listner");
      contentRef.current.addEventListener("onClick", closeLeftMenu);
      return () => {
        contentRef.current.removeEventListener("onClick", closeLeftMenu);
      };
    }
  }, [showLeftMenu]);

  useEffect(() => {}, [contentRef]);

  return (
    <div className={style.content} ref={contentRef}>
      <div className={style.curtain}></div>
      <div className={style.top_bg}>
        <div className={style.top_bg_overlay}></div>
      </div>
      <div className="opacity-100 ease-in-out">
        <div className={style.content_scrollframe}>
          <div className={style.scroll_content}>
            <Header banner={userInfo?.banner} />
            <Summary summary={userInfo?.summary} />
            <CardsContainer content={userInfo?.expertise} />
          </div>
        </div>
      </div>
    </div>
  );
}
