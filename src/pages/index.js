import React, { useState } from "react";
import AppHeader from "@/components/AppHeader";
import AppWrapper from "@/components/AppWrapper";
import MobileTopBar from "@/components/MobileTopBar";
import PreLoader from "@/components/PreLoader";

export default function Home() {
  const [showPreLoader, setShowPreLoader] = useState(false);

  const rootHeight = showPreLoader ? "100vh" : "100%";

  return (
    <div className="main_app mw920:p-0" style={{ height: rootHeight }}>
      <AppHeader />

      <React.Fragment>
        <MobileTopBar />
        <AppWrapper />
      </React.Fragment>

      {/* {showPreLoader && (
        <PreLoader onComplete={() => setShowPreLoader(false)} />
      )} */}
    </div>
  );
}
