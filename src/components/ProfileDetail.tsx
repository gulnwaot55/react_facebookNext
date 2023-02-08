import ProfileUser from "@/layouts/ProfileUser";
import { profileDetail } from "@/models/Constant";
import React from "react";
import ProfileDetails from "./ProfileDetailMore";
import { useState } from "react";
import ProfileDetailHide from "./ProflieDetailHide";
import ShotcutProfile from "./ShotcutProfile";
import ShotcutProfileHide from "./ShotcutProfileHide";



export default function ProfileDetail() {

  const [isToggled, setItToggled] = useState(false);
  const [isToggleds, setItToggleds] = useState(false);

  return (
    <div className="grid  grid-flow-row auto-cols-max">
      {profileDetail.map((data) => {
        return <ProfileUser name={data.name} img={data.img} />;
      })}
      <div onClick={() => setItToggled(!isToggled)}>{isToggled == true ? <ProfileDetailHide /> : <ProfileDetails />}</div>
      <div className="border-b-2 border-gray-500 ">
      </div>
      <div>ทางลัดของคุณ</div>
      <ShotcutProfile />
      <div onClick={() => setItToggleds(!isToggleds)}>{isToggleds == true ? <ShotcutProfileHide /> : <ProfileDetails />}</div>
    </div>
  );
}



