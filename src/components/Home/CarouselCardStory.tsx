import React from "react";

function CarouselCardStory() {
  return (
    <div className="flex items-center justify-start carousel w-full h-5/6 m-4   ">
      <div
        id="slide0"
        className="flex-col carousel-item relative w-2/5 h-full bg-slate-600 justify-center "
      >
        <img
          src="https://i.pinimg.com/originals/e8/fb/a4/e8fba4c10403aa72f8c6ae10296ef8b2.jpg"
          className="w-96 h-full  object-cover rounded-t-lg  "
        />

        <div className=" carousel-item relative w-full bg-zinc-100 py-2 justify-center rounded-b-lg  shadow-md">
          สร้างสตอรี่
          <img
            className="absolute  w-16 h-16 overflow-visible  -translate-y-full "
            src="/assets/images/plus.png"
          />
        </div>
      </div>
      <div
        id="slide1"
        className="carousel-item relative w-2/5  h-full mx-2 my-2 "
      >
        <img
          src="https://i.pinimg.com/originals/e8/fb/a4/e8fba4c10403aa72f8c6ae10296ef8b2.jpg"
          className="w-full h-full object-cover rounded-2xl "
        />
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
      </div>
    </div>
  );
}

export default CarouselCardStory;
