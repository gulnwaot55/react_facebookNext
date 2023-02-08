import ProfileUser from "@/layouts/ProfileUser";
import React from "react";
import { useState } from "react";




export default function ShotcutProfile() {


  return (
    <div className="ggrid grid-flow-col auto-cols-max ">
      {shotcutProfileData.map((data) => {
        return <ProfileUser name={data.name} img={data.img} />;
      })}
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


