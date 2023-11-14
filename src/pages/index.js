import React, { useState } from "react";
import AppHeader from "@/components/AppHeader";
import AppWrapper from "@/components/AppWrapper";
import MobileTopBar from "@/components/MobileTopBar";
import PreLoader from "@/components/PreLoader";
import PFInfo from "@/config/portfolio.json";

export default function Home() {
  const [showPreLoader, setShowPreLoader] = useState(true);

  const rootHeight = showPreLoader ? "100vh" : "100%";

  return (
    <div className="main_app mw920:p-0" style={{ height: rootHeight }}>
      <AppHeader />

      {!showPreLoader && (
        <React.Fragment>
          <MobileTopBar />
          <AppWrapper
            userFullName={PFInfo.user_full_name}
            designations={PFInfo.designations}
            socialMeadiaList={PFInfo.social_media_list}
          />
        </React.Fragment>
      )}

      {showPreLoader && (
        <PreLoader
          userFullName={PFInfo.user_full_name}
          progressBarColor={PFInfo.progressBarColor}
          onComplete={() => setShowPreLoader(false)}
        />
      )}
    </div>
  );
}
