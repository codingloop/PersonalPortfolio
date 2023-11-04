import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";

export default function InfoBarHeader({ setShowLeftMenu }) {
  return (
    <div className={style.infobarheader}>
      <div className={style.infobarheaderbtn}>
        <FontAwesomeIcon
          icon={faEllipsisV}
          onClick={() => setShowLeftMenu((state) => !state)}
        />
      </div>
    </div>
  );
}
