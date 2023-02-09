
import ProfileUser from "@/layouts/ProfileUser";
import { profileDetailAll } from "@/models/Constant/ProfileDetailAll";
import React from "react";




export default function ProfileDetailAll() {
    return (
        <div className="ggrid grid-flow-col auto-cols-max ">
            {profileDetailAll.map((data) => {
                return <ProfileUser name={data.name} img={data.img} />;
            })}
        </div>
    );
}



