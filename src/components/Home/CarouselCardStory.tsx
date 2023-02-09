import CardImg from "@/layouts/CardImg";
import { dataList } from "@/models/Constant/StoryImages";
import React from "react";

function CarouselCardStory() {
  return (
    <div className="flex flex-row w-96 h-96 ">
      {/* <div
        id="slide0"
        className="flex-col carousel-item relative w-2/5  h-5/6 justify-center rounded-t-2xl "
      >
        <img
          src="https://i.pinimg.com/originals/e8/fb/a4/e8fba4c10403aa72f8c6ae10296ef8b2.jpg"
          className="w-96 h-full  object-cover rounded-t-2xl  "
        />

        <div className="flex carousel-item relative w-full h-12 bg-zinc-100 py-2 justify-center items-end rounded-b-2xl  shadow-md">
          สร้างสตอรี่
          <img
            className="absolute  w-16 h-16 overflow-visible  -translate-y-full  top-1/2" 
            src="/assets/images/plus.png"
          />
        </div>
      </div> */}
      <div className="flex flex-row w-full h-auto relative">
        {dataList.map((data) => {
          {
            console.log(dataList[3].items);
          }
          return (
            <div
              id={data.items}
              className="carousel-item relative w-full  h-full mx-2 my-2  "
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
      <div className="flex justify-center  w-full py-2 gap-2">
        <button
          type="submit"
          value="Submit Form"
          id={dataList[3].items}
          className="btn btn-xs"
        >
          {" "}
        </button>
        <button
          type="submit"
          value="Submit Form"
          id={dataList[0].items}
          className="btn btn-xs"
        >
          {" "}
          Submit The Form
        </button>
      </div>

      {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={ "#"+dataList[3].items} className="btn btn-circle">
                ❮
              </a>
              <a href={"#"+dataList[1].items} className="btn btn-circle">
                ❯
              </a>
            </div> */}
      {/* <div
        id="slide1"
        className="carousel-item relative w-2/5  h-full mx-2 my-2  "
      >
        <img
          src="https://i.pinimg.com/originals/e8/fb/a4/e8fba4c10403aa72f8c6ae10296ef8b2.jpg"
          className="w-full h-full object-cover rounded-2xl "
        />
        <div className="avatar absolute  inset-x-0 top-4 ml-4">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.pinimg.com/originals/26/f4/d0/26f4d043ebe807f590043df823e8e028.jpg" />
          </div>
        </div>
        <div className=" absolute inset-x-0 bottom-0 h-10 items-center text-white ml-6">
          Nameeeee
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-2/5  h-full mx-1 my-2 "
      >
        <img
          src="https://i.pinimg.com/originals/26/f4/d0/26f4d043ebe807f590043df823e8e028.jpg"
          className="w-full h-full object-cover rounded-2xl "
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-2/5  h-full mx-1 my-2 "
      >
        <img
          src="https://i.pinimg.com/originals/87/98/af/8798af75b9900c808a7ba7f1da01e60b.jpg"
          className="w-full h-full object-cover rounded-2xl "
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-2/5  h-full mx-1 my-2 "
      >
        <img
          src="https://i.pinimg.com/originals/99/29/d8/9929d863f816975559cb20c8c7b96c48.jpg"
          className="w-full h-full object-cover rounded-2xl "
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      <div className=" flex justify-center">
        <a href="#slide0" className="btn btn-circle">
          {" "}
          ❯{" "}
        </a>
      </div> */}
    </div>
  );
}

export default CarouselCardStory;
