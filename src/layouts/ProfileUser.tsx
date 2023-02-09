import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  img: string;
}

export default function ProfileUser({ name, img }: Props) {
  return (
    <div className="hover:bg-stone-200 hover:rounded-lg py-1 ">
      <div className="avatar ">
        <div className="w-9 h-9 rounded-full">
          <Image
            className=" w-full h-full rounded-md object-cover"
            height={80}
            width={80}
            alt={name}
            src={img}
          />
        </div>
        <h1 className="text-black pl-4 py-2 "> {name}</h1>
      </div>
    </div>
  );
}


