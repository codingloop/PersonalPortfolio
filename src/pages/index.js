import AppHeader from "@/components/AppHeader";
import AppWrapper from "@/components/AppWrapper";
import MobileTopBar from "@/components/MobileTopBar";
import PreLoader from "@/components/PreLoader";

export default function Home() {
  return (
    <div className="main-app">
      <AppHeader />
      <MobileTopBar />
      <AppWrapper />
      <PreLoader />
    </div>
  );
}
