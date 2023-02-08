import React, { useState } from "react";
import ProfileDetail from "./ProfileDetail";
import ProfileUser from "@/layouts/ProfileUser";
import { tebsMenu, tebsMenuPost } from "@/models/Constant/TabsMene";
import CardImg from "@/layouts/CardImg";
import { dataList } from "@/models/Constant/StoryImages";
import AvatarImg from "@/layouts/AvatarImg";
import { UserProfile } from "@/models/Constant/ProfileDetailData";
import TabsMenuBar from "@/layouts/TabsMenubar";

export default function HomePage() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const Text = () => <div>You clicked the button!</div>;
  return (
    <>
      <div className="flex  bg-zinc-100 ">
        <div className="flex basis-1/4  flex-row   items-center ml-4 mx-10 my-6 ">
          <ProfileDetail />
        </div>
        <div className="flex flex-col basis-1/4  rounded-lg my-6   drop-shadow-lg">
          <div className=" flex flex-row w-full  items-center justify-around border-b-2  bg-white  rounded-t-lg">
            {tebsMenu.map((data) => {
              return <TabsMenuBar name={data.name} img={data.icon} />;
            })}
          </div>
          <div className="flex grow flex-row bg-white h-1 rounded-b-lg ">
            {dataList.map((data) => {
              return <CardImg name={data.name} img={data.img} />;
            })}
          </div>
          <div className=" bg-white mt-4 rounded-lg p-4 ">
            <div className="flex flex-row grow  border-b-4 pb-6">
              {UserProfile.map((data) => {
                return <AvatarImg img={data.image} />;
              })}
              <div>
                <input
                  type="email"
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className=" w-full text-gray-900  rounded-full    p-2.5  dark:bg-gray-200 "
                  placeholder={"คุณคิดอะไรอยู่" + { UserProfile }}
                />
              </div>
            </div>
            <div className="flex flex-row grow items-baseline   justify-around">
              {tebsMenuPost.map((data) => {
                return <TabsMenuBar name={data.name} img={data.icon} />;
              })}
            </div>
          </div>
        <div>
        <div className=" bg-white mt-4 rounded-lg p-4 ">
            <div className="flex flex-row grow  border-b-4 pb-6">
              {UserProfile.map((data) => {
                return <AvatarImg img={data.image} />;
              })}
              <div>
                <input
                  type="email"
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className=" w-full text-gray-900  rounded-full    p-2.5  dark:bg-gray-200 "
                  placeholder={"คุณคิดอะไรอยู่" + { UserProfile }}
                />
              </div>
            </div>
            <div className="flex flex-row grow items-baseline   justify-around">
              {tebsMenuPost.map((data) => {
                return <TabsMenuBar name={data.name} img={data.icon} />;
              })}
            </div>
          </div>
        </div>
        </div>
        <div className="flex grow basis-1/4 flex-col  justify-end   items-center "></div>
      </div>
    </>
  );
}
