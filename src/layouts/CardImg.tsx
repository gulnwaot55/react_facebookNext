import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  img: string;
  items: string;
}

export default function CardImg({ name, img, items }: Props) {
  return (
    <div className="carousel   ">
      {/* <div className="carousel ">
      <div
        id={items}
        className="carousel-item relative w-full  h-full mx-2 my-2  "
      >
        <img src={img} className="w-full h-full object-cover rounded-2xl " />
        <div className="avatar absolute  inset-x-0 top-4 ml-4">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} />
          </div>
        </div>
        <div className=" absolute inset-x-0 bottom-0 h-10 items-center text-white ml-6">
          {name}
        </div>
        
       
      </div>
     
    </div> */}

      {/* <div
        className="hero rounded-md p-10 h-60 w-40 m-4 object-cover  "
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
        </div>
      </div> */}
    </div>
  );
}
