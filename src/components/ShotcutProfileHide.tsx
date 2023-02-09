import ProfileUser from "@/layouts/ProfileUser";
import React from "react";




export default function ShotcutProfileHide() {
    return (
        <div className="ggrid grid-flow-col auto-cols-max ">
            {shotcutProfileHide.map((data) => {
                return <ProfileUser name={data.name} img={data.img} />;
            })}
        </div>
    );
}

const shotcutProfileHide = [
    {
        name: "ดูน้อยลง",
        img: "/assets/images/up_arrow.png",
    },   
];



