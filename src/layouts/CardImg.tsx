import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  img: string;
}

export default function CardImg({ name, img }: Props) {
  return (
    <div>
      <div
        className="hero rounded-md p-10 h-72 w-40 m-4 object-cover "
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className=" grid grid-cols-3 gap-4 place-items-start">
          <div className="avatar card-title">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                className=" w-full h-full rounded-md object-cover"
                height={80}
                width={80}
                alt={name}
                src={img}
              />
            </div>
          </div>

          <div>22222</div>
        </div>
      </div>
      <div className="card w-4/5 h-4/5 bg-base-100 shadow-xl image-full m-4">
        <figure>
          <Image
            className=" w-full h-full rounded-md object-cover"
            height={80}
            width={80}
            alt={name}
            src={img}
          />
        </figure>
        <div className="card-body  ">
          <div className="avatar card-title">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                className=" w-full h-full rounded-md object-cover"
                height={80}
                width={80}
                alt={name}
                src={img}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
