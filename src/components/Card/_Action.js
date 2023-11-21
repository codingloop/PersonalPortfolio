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
    const colorStars = action.rating;
    const emptyStars = 5 - action.rating;

    return (
      <div className={style.card_rating}>
        <ul>
          {[...Array(colorStars)].map((item, index) => (
            <li key={`rating_${index}`}>
              <FontAwesomeIcon icon={faStar} className="text-mainyellow" />
            </li>
          ))}
          {[...Array(emptyStars)].map((item, index) => (
            <li key={`rating_${index}`}>
              <FontAwesomeIcon icon={faStar} className="text-custom6" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
