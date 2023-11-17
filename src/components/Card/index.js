import style from "./style.module.css";

export default function Card({ title, link, linkName, details }) {
  return (
    <div className={style.card}>
      <div className={style.box}>
        <div className={style.content}>
          <h5>{title}</h5>
          <div className="mt-1">{details}</div>
          {link && (
            <div className="pt-15px">
              <a href={link} className={style.card_link}>
                {linkName}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
