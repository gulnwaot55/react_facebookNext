import ProfileUser from "@/layouts/ProfileUser";
import { shotcutProfileAll } from "@/models/Constant/ShotcutProFileAll";
import React from "react";




export default function ShotcutProfileAll() {
    return (
        <div className="ggrid grid-flow-col auto-cols-max ">
            {shotcutProfileAll.map((data) => {
                return <ProfileUser name={data.name} img={data.img} />;
            })}
        </div>
    );
}

