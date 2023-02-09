import ProfileUser from "@/layouts/ProfileUser";
import React from "react";
import ProfileDetails from "../ProfileDetailMore";
import { useState } from "react";
import ProfileDetailHide from "../ProflieDetailHide";
import ShotcutProfile from "../ShotcutProfile";
import ShotcutProfileHide from "../ShotcutProfileHide";
import { profileDetail } from "@/models/Constant/ProfileDetailData";
import ProfileDetailMore from "../ProfileDetailMore";
import ProfileDetailAll from "../ProfileDetailAll";
import ShotcutProfileAll from "../ShotcutProfileAll";

export default function ProfileDetail() {

  const [isToggleds, setItToggleds] = useState(false);
  const [isShow, setItShow] = useState(false);



  return (
    <div className="grid  grid-flow-row auto-cols-max content-start ">
      {profileDetail.map((data) => {
        return <ProfileUser name={data.name} img={data.img} />;
      })}
      <div className="grid w-full">
        {isShow == true && <ProfileDetailAll />}
      </div>
      <div className="grid w-full">
          <div onClick={()=> setItShow(!isShow)}>
          {isShow == false ? <ProfileDetailMore /> : <ProfileDetailHide />}
          </div>
      </div>
      <div className="border-b-2 border-gray-500"></div>
      <div>ทางลัดของคุณ</div>
      <ShotcutProfile />
      <div className="grid w-full">
        {isToggleds == true && <ShotcutProfileAll />}
      </div>
      <div onClick={() => setItToggleds(!isToggleds)}>
        {isToggleds == false ? <ProfileDetails /> : <ShotcutProfileHide />}
      </div>
    </div>
  );
}
