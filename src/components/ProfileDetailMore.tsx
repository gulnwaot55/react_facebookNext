import ProfileUser from "@/layouts/ProfileUser";
import React from "react";




export default function ProfileDetails() {
    return (
        <div className="grid w-full">
            {profileDetails.map((data) => {
                return <ProfileUser name={data.name} img={data.img} />;
            })}
            
        </div>
    );
}

const profileDetails = [
    {
        name: "ดูเพิ่มเติม",
        img: "/assets/images/down_arrow.png",
    },

];


