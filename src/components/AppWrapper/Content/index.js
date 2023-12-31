import { useContext, useEffect, useRef } from "react";
import CardsContainer from "./_CardsContainer";
import Header from "./_Header";
import Summary from "./_Summary";
import style from "./style.module.css";
import { UserContext } from "@/utils/providers/userInfo";
import Footer from "./_Footer";
import Contact from "./_Contact";

export default function Content({ showLeftMenu, setShowLeftMenu }) {
  const userInfo = useContext(UserContext);
  const contentRef = useRef();

  const closeLeftMenu = () => {
    setShowLeftMenu(false);
  };

  useEffect(() => {
    if (contentRef && contentRef.current && showLeftMenu) {
      contentRef.current.addEventListener("click", closeLeftMenu);
    }
    return () => {
      if (contentRef && contentRef.current) {
        contentRef.current.removeEventListener("click", closeLeftMenu);
      }
    };
  }, [contentRef, showLeftMenu]);

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
            <CardsContainer content={userInfo?.recommendations} />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
