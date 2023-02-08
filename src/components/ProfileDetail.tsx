import ProfileUser from "@/layouts/ProfileUser";
import { profileDetail } from "@/models/Constant";
import React from "react";
import ProfileDetails from "./ProfileDetailMore";


export default function ProfileDetail() {
  return (
    <div className="grid  grid-flow-row auto-cols-max">
      {profileDetail.map((data) => {
        return <ProfileUser name={data.name} img={data.img} />;
      })}
      <ProfileDetails />
    </div>
  );
}




