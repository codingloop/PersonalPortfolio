import Header from "./_Header";
import InfoBarHeader from "./_InfoBarHeader";
import ScrollFrame from "./_ScrollFrame";
import Social from "./_Social";
import style from "./style.module.css";

export default function InfoBar() {
  return (
    <div className={style.infobar}>
      <div className="py-0 px-[15px]">
        <InfoBarHeader />
        <Header />
        {/* <Header />
        <ScrollFrame />
        <Social /> */}
      </div>
    </div>
  );
}
