import React from "react";
import Image from "next/image";

interface Props {
    name: string;
    img: string;
}

export default function ContactUser({ name, img }: Props) {
    return (
        <div className="hover:bg-stone-200 hover:rounded-lg py-1 px-1 w-full">
            <div className="avatar">
                <div className="avatar online  ">
                    <div className="w-12 rounded-full ">
                        <img src={img} />
                    </div>
                </div>
                <h1 className="text-black pl-4 py-2 font-medium"> {name}</h1>
            </div>
        </div>
    );
}


