import ProfileUser from "@/layouts/ProfileUser";
import React from "react";



export default function ProfileDetails() {
    return (
        <div className="ggrid grid-flow-col auto-cols-max">
            {profileDetails.map((data) => {
                return <ProfileUser name={data.name} img={data.img} />;
            })}
        </div>
    );
}

const profileDetails = [
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
    {
        name: "ดูน้อยลง",
        img: "/assets/images/up_arrow.png",
    },

];


