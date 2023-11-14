import Header from "./_Header";
import style from "./style.module.css";

export default function Content() {
  return (
    <div className={style.content}>
      <div className={style.curtain}></div>
      <div className={style.top_bg}>
        <div className={style.top_bg_overlay}></div>
      </div>
      <div className="opacity-100 ease-in-out">
        <div className={style.content_scrollframe}>
          <div className={style.scroll_content}>
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}
