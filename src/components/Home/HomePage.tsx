import React, { useState } from "react";
import ProfileDetail from "./ProfileDetail";
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
      <div className="flex bg-zinc-100  ">
        <div className="flex grow basis-1/4  flex-row   items-center ml-4 mx-10 p-10 ">
          <ProfileDetail />
        </div>
        <div className="flex grow flex-col basis-1/3  rounded-lg my-6 mx-10  drop-shadow-lg">
          <div className=" flex flex-row w-full  items-center justify-around border-b-2  bg-white  rounded-t-lg">
            {tebsMenu.map((data) => {
              return <TabsMenuBar name={data.name} img={data.icon} />;
            })}
            
          </div>
          {/* <div className="flex  flex-row bg-white rounded-b-lg ">
            {dataList.map((data) => {
              return <CardImg name={data.name} img={data.img} />;
            })}
          </div> */}
          <div className=" bg-white mt-4 rounded-lg p-4 ">
            <div className="flex flex-row grow  border-b-4 pb-6">
              {UserProfile.map((data) => {
                return <AvatarImg img={data.image} />;
              })}
              <input
                type="email"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                className=" w-full  text-gray-900  rounded-full    p-2.5  dark:bg-gray-200 "
                placeholder={
                  "คุณคิดอะไรอยู่ " + { UserProfile }.UserProfile[0].name
                }
              />
            </div>
            <div className="flex flex-row grow items-baseline   justify-around">
              {tebsMenuPost.map((data) => {
                return <TabsMenuBar name={data.name} img={data.icon} />;
              })}
            </div>
          </div>
          <div>
            <div className=" bg-white mt-4 rounded-lg p-4 ">
              <div className="flex flex-row grow items-center pb-6 ">
                {UserProfile.map((data) => {
                  return <AvatarImg img={data.image} />;
                })}
                <div className=" flex flex-col ">
                  <p> {UserProfile[0].name}</p>
                  <p> 1 วัน </p>
                </div>
              </div>
              <img src="https://i.pinimg.com/originals/6e/62/58/6e62587d5c63620ce8deaa448b30accf.jpg" />
            </div>
          </div>
        </div>
        <div className="flex grow basis-1/4 flex-col  justify-end   items-center "></div>
      </div>
    </>
  );
}
