import Card from "@/components/Card";
import Container from "./_Container";
import style from "./style.module.css";

function CardsContainer({ content }) {
  return (
    <Container>
      <div className={style.row}>
        <div className={style.col_t1}>
          <div className={`${style.card_container_title}`}>
            <div className="mb-[30px] relative self-center">
              <h4>{content?.title}</h4>
            </div>
          </div>
        </div>
        {content?.items?.map((item, index) => (
          <Card
            key={`card_item_${index}`}
            title={item?.title}
            link={item?.link}
            linkName={item?.linkName}
            details={item?.details}
          />
        ))}
      </div>
    </Container>
  );
}

export default CardsContainer;
