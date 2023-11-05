import { useState } from "react";
import Header from "./_Header";
import InfoBarHeader from "./_InfoBarHeader";
import ScrollFrame from "./_ScrollFrame";
import Social from "./_Social";
import style from "./style.module.css";

export default function InfoBar({
  userFullName,
  designations,
  socialMeadiaList,
}) {
  const [showLeftMenu, setShowLeftMenu] = useState(false);

  const mainClassName = showLeftMenu
    ? `${style.infobar} ${style.infobarActive}`
    : style.infobar;

  return (
    <div className={mainClassName}>
      <div className="py-0 px-[15px]">
        <InfoBarHeader setShowLeftMenu={setShowLeftMenu} />
        <Header userFullName={userFullName} designations={designations} />
        <ScrollFrame />
        <Social socialMeadiaList={socialMeadiaList} />
      </div>
    </div>
  );
}
