import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  img: string;
}
export default function TabsMenuBar({ name, img }: Props) {
  return (
    <div className="flex flex-row hover:bg-slate-100 hover:rounded-lg py-1 px-1 items-center">
      <Image
        className=" w-6 h-6 rounded-md object-cover"
        height={80}
        width={80}
        alt={name}
        src={img}
      />
      <h1 className="text-black pl-4 py-2 font-medium"> {name}</h1>
    </div>
  );
}
