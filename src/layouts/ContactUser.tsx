import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  img: string;
}

export default function ContactUser({ name, img }: Props) {
  return (
    <div className="hover:bg-stone-200 hover:rounded-lg py-1 px-1 w-full flex m-1">
      <div className="avatar online ">
        <div className="w-12 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2">
          <img src={img} />
        </div>
      </div>
      <h1 className="flex text-black pl-4 py-2 font-medium items-center justify-center ">
        {" "}
        {name}
      </h1>
    </div>
  );
}
