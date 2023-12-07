import Card from "@/components/Card";
import Container from "./_Container";
import style from "./style.module.css";

function SwipeCardsContainer({ content }) {
  return (
    <Container>
      <div className={style.row}>
        <div className={style.col_t1}>
          <div className={`${style.container_title}`}>
            <div className="mb-[30px] relative self-center">
              <h4>{content?.title}</h4>
            </div>
          </div>
        </div>
        {content?.items?.map((item, index) => (
          <Card key={`card_item_${index}`} item={item} />
        ))}
      </div>
    </Container>
  );
}

export default SwipeCardsContainer;
