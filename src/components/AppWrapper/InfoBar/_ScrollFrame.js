import { useContext } from "react";
import style from "./style.module.css";
import { UserContext } from "@/providers/userInfo";
import Divider from "@/components/Divider";
import CircularProgressBar from "@/components/CircularProgressBar";

const PersonalInfo = ({ personalInfo }) => (
  <div className="pt-15px pb-15px text-custom4">
    <ul className="p-0 m-0">
      {personalInfo?.map((info, ind) => (
        <li className={style.scroll_content_personal_info} key={`pinfo_${ind}`}>
          <h6>{info?.name}:</h6>
          <span>{info?.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Languages = ({ languages, stroke, background }) => {
  return (
    <div className={style.scroll_content_languages}>
      <CircularProgressBar
        progress="90%"
        stroke={stroke}
        backgroundColor={background}
      />
    </div>
  );
};

export default function ScrollFrame() {
  const userContext = useContext(UserContext);

  return (
    <div className={style.scroll_frame}>
      <div className={style.scroll_content}>
        <PersonalInfo personalInfo={userContext?.personalInfo} />
        <Divider />
        <Languages
          languages={useContext?.languages}
          stroke={userContext.progressBarColor}
          background="#1e1e28"
        />
      </div>
    </div>
  );
}
