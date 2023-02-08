import { tebsMenu } from "@/models/Constant";
import React from "react";
import Image from "next/image";
import ProfileUser from "@/layouts/ProfileUser";

export default function TabsMenuBar() {
  return (
    <div className=" border-gray-200 ">
      <div className=" grid    grid-cols-3   justify-items-center  text-blue-600 border-b-2  py-2 content-center group">
      {tebsMenu.map((data) => {
                return <ProfileUser name={data.name} img={data.icon} />;
              })}
      </div>
    </div>
  );
}
