import React from "react";
import Image from "next/image";
import { Space_Grotesk } from "@next/font/google";

interface Props {
  name: string;
  img: string;
}

export default function CardImg({ name, img }: Props) {
  return (
    <div>
      <div className="card w-4/5 h-72 bg-base-100 shadow-xl image-full m-6">
        <figure>
          <Image
            className=" w-full h-full rounded-md object-cover"
            height={80}
            width={80}
            alt={name}
            src={img}
          />
        </figure>
        <div className="card-body ">
          <div className="avatar card-title">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                className=" w-full h-full rounded-md object-cover"
                height={80}
                width={80}
                alt={name}
                src={img}
              />
            </div>
          </div>
          
          <div className="card-actions justify-end">
            <p>{name}</p>
          </div>
        </div>
      </div>
      {/* <div className="  w-4/5 h-72 rounded-lg bg-">
        <Image
          className=" w-full h-full rounded-md object-cover"
          height={80}
          width={80}
          alt={name}
          src={img}
        />
      </div> */}
    </div>
  );
}
