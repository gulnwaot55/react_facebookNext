
import ProfileUser from "@/layouts/ProfileUser";
import React from "react";




export default function ProfileDetailHide() {
    return (
        <div className="ggrid grid-flow-col auto-cols-max ">
            {profileDetailHide.map((data) => {
                return <ProfileUser name={data.name} img={data.img} />;
            })}
        </div>
    );
}

const profileDetailHide = [
    {
        name: "ดูน้อยลง",
        img: "/assets/images/up_arrow.png"
    }
];

