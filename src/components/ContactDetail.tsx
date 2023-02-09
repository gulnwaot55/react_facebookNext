import React from "react";
import { useState } from "react";
import { contactAll } from "@/models/Constant/ContactAll";
import ContactUser from "@/layouts/ContactUser";

export default function ContactDetail() {

    return (
        <div className="grid  grid-flow-row auto-cols-max p-10 bg-black w-3/5">
            {contactAll.map((data) => {
                return <ContactUser name={data.name} img={data.img} />;
            })}
        </div>
    );
}
