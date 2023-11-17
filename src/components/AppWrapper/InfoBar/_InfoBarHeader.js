import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";

export default function InfoBarHeader({ showLeftMenu, setShowLeftMenu }) {
  return (
    <div className={style.infobarheader}>
      <div className={style.infobarheaderbtn}>
        <FontAwesomeIcon
          icon={showLeftMenu ? faClose : faEllipsisV}
          onClick={() => setShowLeftMenu((state) => !state)}
        />
      </div>
    </div>
  );
}
