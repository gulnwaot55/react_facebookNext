import React from "react";
import SearchInput from "./SearchInput";
import { iconNavEnd, imgIcon, UserProfile } from "@/models/Constant";
import AvatarImg from "./AvatarImg";

export default function IconNavbar() {
  return (
    <header className="grid grid-flow-col auto-cols-max grid-cols-4">
      <div className="grid grid-flow-col auto-cols-max col-span-1 ">
        <div className="avatar  ml-4  mt-2">
          <div className="w-10 h-10 rounded-full">
            <img src="https://i.pinimg.com/originals/7a/64/32/7a643277f65fb3f7d544b0e2bfae8abc.jpg" />
          </div>
        </div>
        <SearchInput />
      </div>
      <div className=" grid  col-span-2  grid-cols-5   justify-items-center  text-blue-600 border-b-2   content-center group mx-16">
        {imgIcon.map((icon) => {
          return (
            <div className="w-8  h-8 col-center  ">
              <img src={icon.image} />
            </div>
          );
        })}
      </div>
      <div className=" grid col-span-1 grid-cols-4 justify-items-end  ml-64 content-center">
        {iconNavEnd.map((icon) => {
          return (
            <div className=" rounded-full h-10 w-10  p-2 bg-gray-200 col-end ">
              <img className=" w-6 h-6" src={icon.image} />
            </div>
          );
        })}
        {UserProfile.map((data) => {
          return <AvatarImg img={data.image} />;
        })}
      </div>
    </header>
  );
}
