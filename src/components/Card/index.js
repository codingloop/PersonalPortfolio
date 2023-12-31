import CardAction from "./_Action";
import style from "./style.module.css";

export default function Card({ item }) {
  return (
    <div className={style.card}>
      <div className={style.box}>
        <div className={style.content}>
          {item.imageLink && (
            <img
              src={item.imageLink}
              className={style.card_image}
              alt={item?.title}
            />
          )}

          <h5>{item?.title}</h5>
          {item?.subtitle && (
            <div className="mb-[10px] mt-[5px] italic color-custom5">
              {item?.subtitle}
            </div>
          )}
          <div className="mt-1">{item?.details}</div>

          <CardAction action={item?.action} />
        </div>
      </div>
    </div>
  );
}
