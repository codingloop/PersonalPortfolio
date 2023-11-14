import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { iconsConfig } from "@/config/socialIcons";

export default function Social({ socialMeadiaList }) {
  return (
    <div className={style.social_container}>
      {socialMeadiaList?.map((socialMedia, index) => {
        return (
          <a
            href={socialMedia?.link}
            key={`social_icon_${index}`}
            target="_blank"
          >
            <FontAwesomeIcon icon={iconsConfig[socialMedia?.icon]} />
          </a>
        );
      })}
    </div>
  );
}
