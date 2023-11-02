import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function InfoBarHeader() {
  return (
    <div className={style.infobarheader}>
      <div className={style.infobarheaderbtn}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  );
}
