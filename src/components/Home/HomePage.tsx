import React, { useState } from "react";
import TabMenu from "./TabMenu";
import StoryCardView from "./StoryCardView";
import TabsMenuBar from "./TabsMenuBar";

export default function HomePage() {
  return (
    <div className=" grid grid-cols-4 p-10 bg-white-200 h-screen ">
      <TabMenu />
      <div className=" opacity-95 rounded-lg col-span-2 mx-10 bg-slate-100">
     <TabsMenuBar/>
        <StoryCardView />
      </div>
      <div className="  col-span-1">Page</div>
    </div>
  );
}
