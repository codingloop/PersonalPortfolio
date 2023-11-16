import { useContext } from "react";
import Container from "./_Container";
import style from "./style.module.css";
import { UserContext } from "@/utils/providers/userInfo";

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

function Summary() {
  const userInfo = useContext(UserContext);
  return (
    <Container>
      <div className={`${style.row} pt-[30px] pb-0`}>
        {userInfo.summary?.map((item, ind) => (
          <SummaryCard key={`si_${ind}`} item={item} />
        ))}
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
    </Container>
  );
}

export default Summary;
