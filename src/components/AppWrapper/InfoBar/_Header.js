import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

export default function Header({ userFullName, designations }) {
  return (
    <div className={style.header}>
      <div className={style.avatar}>
        <a href="/images/face-1.jpg">
          <img src="/images/face-1.jpg" />
          <FontAwesomeIcon icon={faExpand} />
        </a>
        <div className={style.lamp_light}>
          <div className={style.available_lamp}></div>
        </div>
      </div>
      <h5 className="text-custom3 transition">{userFullName}</h5>
      <div className="text-11px">
        {designations?.map((designation, index) => (
          <div key={`designation_${index}`}>{designation}</div>
        ))}
      </div>
    </div>
  );
}
