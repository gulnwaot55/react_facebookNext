import AvatarImg from "@/layouts/AvatarImg";
import SearchInput from "@/layouts/SearchInput";
import { imgIcon, iconNavEnd } from "@/models/Constant/NavbarImageIcons";
import { UserProfile } from "@/models/Constant/ProfileDetailData";
import React from "react";

export default function Navbar() {
  return (
    <header className="shadow-2xl">
      <div className="flex   ">
        <div className="flex basis-1/4  flex-row   items-center ml-4">
        <div className="avatar  ">
          <div className="w-10 h-10 rounded-full">
            <img src="https://i.pinimg.com/originals/7a/64/32/7a643277f65fb3f7d544b0e2bfae8abc.jpg" />
          </div>
        </div>
          <SearchInput />
        </div>
        <div className="flex grow flex-row basis-1/3 h-14  justify-around items-center  mx-10">
        {imgIcon.map((icon) => {
          return (
            <div className="w-6  h-6 col-center  ">
              <img src={icon.image} />
            </div>
          );
        })}
        </div>
        <div className="flex grow flex-row  justify-end   items-center ">
          {iconNavEnd.map((icon) => {
            return (
              <div className=" rounded-full h-10 w-10  p-2 mx-2 bg-gray-200  ">
                <img className=" w-6 h-6 " src={icon.image} />
              </div>
            );
          })}
          {UserProfile.map((data) => {
            return <AvatarImg img={data.image} />;
          })}
        </div>
      </div>
    </header>
  );
}
