import ProfileUser from "@/layouts/ProfileUser";
import { shotcutProfileData } from "@/models/Constant/ShotcutProfileData";
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




