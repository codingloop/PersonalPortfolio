import Container from "./_Container";
import style from "./style.module.css";

const SummaryCard = () => (
  <div className={style.col_t2}>
    <div className={style.summary_frame}>
      <div className="min-w-[60px]">
        <span>a345</span>
      </div>
      <h6>Helllot fd sd f</h6>
    </div>
  </div>
);

function Summary() {
  return (
    <Container>
      <div className={`${style.row} pt-[30px] pb-0`}>
        <SummaryCard />
      </div>
    </Container>
  );
}

export default Summary;
