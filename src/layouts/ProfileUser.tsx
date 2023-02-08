import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  img: string;
}

export default function ProfileUser({ name, img }: Props) {
  return (
    <div className="hover:bg-slate-100 hover:rounded-lg py-1 px-1">
      <div className="avatar ">
        <div className="w-10 h-10 rounded-full">
          <Image
            className=" w-full h-full rounded-md object-cover"
            height={80}
            width={80}
            alt={name}
            src={img}
          />
        </div>
        <h1 className="text-black pl-4 py-2 font-medium"> {name}</h1>
      </div>
    </div>
  );
}


