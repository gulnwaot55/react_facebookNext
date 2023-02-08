import ProfileUser from "@/layouts/ProfileUser";
import React from "react";
import { useState } from "react";




export default function ShotcutProfile() {

  const [isToggleds, setItToggleds] = useState(false);

  return (
    <div className="ggrid grid-flow-col auto-cols-max ">
      {shotcutProfileData.map((data) => {
        return <ProfileUser name={data.name} img={data.img} />;
      })}
      {/* <div onClick={() => setItToggleds(!isToggleds)}>{isToggleds == true ? <ShotcutProfileHide /> : <ShotcutProfile />}</div> */}
    </div>
  );
}

const shotcutProfileData = [

    {
      name: "AppStore Community",
      img: "/assets/images/app-store.png",
    },
    {
      name: "Instagram Community",
      img: "/assets/images/instagram.png",
    },
    {
      name: "Twitter Community",
      img: "/assets/images/twitter.png",
    },
    {
      name: "WhatApp Community",
      img: "/assets/images/whatsapp.png",
    },
    {
      name: "Youtube Community",
      img: "/assets/images/youtube.png",
    },
  
  
  ];


const shotcutProfiles = [
  {
    name: "ดูเพิ่มเติม",
    img: "/assets/images/down_arrow.png",
  },

];

