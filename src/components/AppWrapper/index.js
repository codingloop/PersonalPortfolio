import Content from "./Content";
import InfoBar from "./InfoBar";
import MenuBar from "./MenuBar";

export default function AppWrapper() {
  return (
    <div className="max-w-[1440px] w-full h-full mx-auto bg-custom1 bg-cover relative overflow-hidden shadow-shadow1 mw920:rounded-none mw920:h-screen">
      <div className="relative flex flex-nowrap mw920:w-full">
        <InfoBar />
        {/* <Content /> */}
        {/* <MenuBar /> */}
      </div>
    </div>
  );
}
