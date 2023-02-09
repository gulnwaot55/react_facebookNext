import { dataList } from "@/models/Constant/StoryImages";
import React, { useState } from "react";

function CarouselCardStory() {
  const [isNextPage, setNextPage] = useState(dataList[0].items);

  return (
    <div className="flex items-center justify-start h-full w-full p-4 relative ">
      <div className=" carousel  w-full h-full relative">
        <div
          id="slide1"
          className="card flex-col carousel-item w-1/4 h-full  justify-center rounded-t-2xl "
        >
          <figure>
            <img
              src="https://i.pinimg.com/originals/e8/fb/a4/e8fba4c10403aa72f8c6ae10296ef8b2.jpg"
              className="w-full h-full object-cover rounded-t-2xl  "
            />
          </figure>

          <div className="flex carousel-item relative w-full h-10 bg-zinc-100 py-2 justify-center items-end rounded-b-2xl  shadow-md">
            สร้างสตอรี่
            <img
              className="absolute  w-12 h-12 overflow-visible  -translate-y-full  top-1/2"
              src="/assets/images/plus.png"
            />
          </div>
        </div>
        {dataList.map((data) => {
          return (
            <div
              id={data.items}
              className="carousel-item relative w-1/4 px-2  "
            >
              <img
                src={data.img}
                className="w-full  object-cover rounded-2xl "
              />
              <div className="avatar absolute  inset-x-0 top-4 ml-4">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={data.img} />
                </div>
              </div>
              <div className=" absolute inset-x-0 bottom-0 h-10 items-center text-white ml-6">
                {data.name}
              </div>
            </div>
          );
        })}
      </div>
      <a href={`#${dataList[2].items}`}>
      <img
        className=" absolute w-12 h-12 overflow-visible  top-1/2 right-8 translate-x-2 -translate-y-1/2"
        src="/assets/images/next.png"
      />
      </a>
      
    
    </div>
  );
}

export default CarouselCardStory;
