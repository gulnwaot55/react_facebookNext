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
      <div className=" grid grid-cols-4 p-10 bg-zinc-100 h-screen  w-full">
        <ProfileDetail />
        <div className="  col-span-2  ">
          <div className=" opacity-95 rounded-lg col-span-2 mx-10 bg-white">
            <TabsMenuBar />
            <StoryCardView />
          </div>
          <div className=" opacity-95 rounded-lg col-span-2 mx-10 my-6 bg-white">
            <div className=" grid grid-cols-5">
              <div className="avatar mx-10 my-6 col-span-1 ">
                <div className="w-10 rounded-full">
                  <img src="https://i.pinimg.com/originals/7a/64/32/7a643277f65fb3f7d544b0e2bfae8abc.jpg" />
                </div>
              </div>
              <div className=" col-span-2 content-center  mt-4">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-md w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
