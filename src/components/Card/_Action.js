import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function CardAction({ action }) {
  if (!action) return;
  else if (action?.type == "link") {
    return (
      <div className="pt-15px">
        <a href={action?.link} className={style.card_link}>
          {action?.linkName}
        </a>
      </div>
    );
  } else if (action?.type == "show-rating") {
    return (
      <div className={style.card_rating}>
        <ul>
          <FontAwesomeIcon icon={faStar} />
        </ul>
      </div>
    );
  }
}
