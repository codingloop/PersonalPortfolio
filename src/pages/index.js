import AppHeader from "@/components/AppHeader";
import AppWrapper from "@/components/AppWrapper";
import MobileTopBar from "@/components/MobileTopBar";
import PreLoader from "@/components/PreLoader";
import PFInfo from "@/config/portfolio.json";
import { useState } from "react";

export default function Home() {
  const [showPreLoader, setShowPreLoader] = useState(true);

  return (
    <div className="main_app mw920:p-0">
      <AppHeader />

      <MobileTopBar />
      <AppWrapper
        userFullName={PFInfo.user_full_name}
        designations={PFInfo.designations}
        socialMeadiaList={PFInfo.social_media_list}
      />

      {showPreLoader && (
        <PreLoader
          userFullName={PFInfo.user_full_name}
          progressBarColor={PFInfo.progress_bar_color}
          onComplete={() => setShowPreLoader(false)}
        />
      )}
    </div>
  );
}
