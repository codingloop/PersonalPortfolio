import AppHeader from "@/components/AppHeader";
import AppWrapper from "@/components/AppWrapper";
import MobileTopBar from "@/components/MobileTopBar";
import PreLoader from "@/components/PreLoader";
import PFInfo from "@/config/portfolio.json";

export default function Home() {
  return (
    <div className="main_app">
      <AppHeader />
      <MobileTopBar />
      <AppWrapper />
      <PreLoader
        userFullName={PFInfo.user_full_name}
        progressBarColor={PFInfo.progress_bar_color}
      />
    </div>
  );
}
