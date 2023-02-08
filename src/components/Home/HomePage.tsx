import React, { useState } from "react";
import StoryCardView from "./StoryCardView";
import ProfileDetail from "../ProfileDetail";
import ProfileDetails from "../ProfileDetailMore";
import TabsMenuBar from "./TabsMenuBar";

export default function HomePage() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const Text = () => <div>You clicked the button!</div>;
  return (
    <>
      <div className=" grid grid-cols-4 p-10   w-full">
        <ProfileDetail />
        <div className="  col-span-2  ">
          <div className=" opacity-95 rounded-lg col-span-2 mx-10 bg-slate-100">
            <TabsMenuBar />
            <StoryCardView />
          </div>
          <div className="grid grid-rows-3">
            <div className=" opacity-95 rounded-lg col-span-2 mx-10 bg-slate-100 mt-4 ">
              <div className="avatar m-4">
                <div className="w-10 h-10 rounded-full">
                  <img src="https://i.pinimg.com/originals/7a/64/32/7a643277f65fb3f7d544b0e2bfae8abc.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
