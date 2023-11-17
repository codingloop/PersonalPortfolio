import Container from "./_Container";
import style from "./style.module.css";

const SummaryCard = ({ item }) => (
  <div className={style.col_t2}>
    <div className={style.summary_frame}>
      <div className="min-w-[60px]">
        <span className={style.summary_frame_counter}>{item?.heading}</span>
      </div>
      <h6>{item?.value}</h6>
    </div>
  </div>
);

function Summary({ summary }) {
  return (
    <Container>
      <div className={`${style.row} pt-[30px] pb-0`}>
        {summary?.map((item, ind) => (
          <SummaryCard key={`si_${ind}`} item={item} />
        ))}
      </div>
    </Container>
  );
}

export default Summary;
