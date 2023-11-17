import { useContext } from "react";
import Header from "./_Header";
import InfoBarHeader from "./_InfoBarHeader";
import ScrollFrame from "./_ScrollFrame";
import Social from "./_Social";
import style from "./style.module.css";
import { UserContext } from "@/utils/providers/userInfo";

export default function InfoBar({ showLeftMenu, setShowLeftMenu }) {
  const userInfo = useContext(UserContext);

  const mainClassName = showLeftMenu
    ? `${style.infobar} ${style.infobarActive}`
    : style.infobar;

  return (
    <div className={mainClassName}>
      <div className="py-0 px-15px">
        <InfoBarHeader
          showLeftMenu={showLeftMenu}
          setShowLeftMenu={setShowLeftMenu}
        />
        <Header
          userFullName={userInfo?.userFullName}
          designations={userInfo?.designations}
        />
        <ScrollFrame />
        <Social socialMeadiaList={userInfo?.socialMeadiaList} />
      </div>
    </div>
  );
}
