import { useState } from "react";
import Content from "./Content";
import InfoBar from "./InfoBar";

export default function AppWrapper({}) {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  return (
    <div className="max-w-[1440px] w-full h-full mx-auto bg-custom1 bg-cover relative overflow-hidden shadow-shadow1 mw920:rounded-none mw920:h-screen">
      <div className="relative flex flex-nowrap mw920:w-full">
        <InfoBar
          showLeftMenu={showLeftMenu}
          setShowLeftMenu={setShowLeftMenu}
        />
        <Content
          showLeftMenu={showLeftMenu}
          setShowLeftMenu={setShowLeftMenu}
        />
      </div>
    </div>
  );
}
