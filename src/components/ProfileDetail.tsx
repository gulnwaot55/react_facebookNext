import ProfileUser from "@/layouts/ProfileUser";
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
    <div className="grid-flow-col auto-cols-max ">
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

const profileDetail = [
  {
    name: "ตี๋ลี้เลอ ปา",
    img: "https://i.pinimg.com/originals/7a/c0/d7/7ac0d71511e4fc3b7be553319e794749.jpg",
  },
  {
    name: "เพื่อน",
    img: "/assets/images/friend.png",
  },
  {
    name: "ที่บันทึกไว้",
    img: "/assets/images/saved.png",
  },
  {
    name: "กลุ่ม",
    img: "/assets/images/group.png",
  },
  {
    name: "ล่าสุด",
    img: "/assets/images/lastview.png",
  },
  {
    name: "Marketplace",
    img: "/assets/images/marketplace.png",
  },

];


