import { useContext } from "react";
import style from "./style.module.css";
import { UserContext } from "@/providers/userInfo";
import Divider from "@/components/Divider";
import CircularProgress from "@/components/ProgressBars/circular";
import SkillProgress from "@/components/ProgressBars/skill";

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
      {languages?.map((language, ind) => (
        <div key={`language_${ind}`} className="w-[50px] h-[80px]">
          <CircularProgress
            progress={language.percent}
            range={{ from: 0, to: 100 }}
            sign={{ value: "%", position: "end" }}
            showMiniCircle={false}
            showValue={true}
            sx={{
              strokeColor: stroke,
              barWidth: 7,
              bgStrokeColor: background,
              bgColor: { value: "#000000", transparency: "20" },
              shape: "full",
              strokeLinecap: "round",
              valueSize: 23,
              valueWeight: "bold",
              valueColor: "white",
              valueFamily: "Trebuchet MS",
              textSize: 13,
              textWeight: "bold",
              textColor: "#000000",
              textFamily: "Trebuchet MS",
              loadingTime: 1000,
              miniCircleColor: "#ff0000",
              miniCircleSize: 1,
              valueAnimation: true,
              intersectionEnabled: true,
            }}
          />
          <h6 className="text-center mt-2">{language.name}</h6>
        </div>
      ))}
    </div>
  );
};

const CoreSkills = ({ coreSkills, stroke }) => (
  <div className="py-[15px]">
    {coreSkills?.map((skill, ind) => (
      <div key={`skill_${ind}`} className="mb-[17px] relative">
        <div className={style.scroll_content_skill_item_heading}>
          <h6>{skill.name}</h6>
        </div>
        <SkillProgress progress={skill.percent} stroke={stroke} />
      </div>
    ))}
  </div>
);

export default function ScrollFrame() {
  const userContext = useContext(UserContext);

  return (
    <div className={style.scroll_frame}>
      <div className={style.scroll_content}>
        <PersonalInfo personalInfo={userContext?.personalInfo} />
        <Divider />
        <Languages
          languages={userContext?.languages}
          stroke={userContext.progressBarColor}
          background="#000"
        />
        <Divider />
        <CoreSkills
          coreSkills={userContext?.coreSkills}
          stroke={userContext.progressBarColor}
        />
        <Divider />
      </div>
    </div>
  );
}
