import React from "react";

function CarouselCardStory() {
  return (
    <div className="flex items-center carousel w-full h-full bg-slate-500">
      <div id="slide1" className="carousel-item relative w-1/4">
        <img
          src="https://i.pinimg.com/originals/e8/fb/a4/e8fba4c10403aa72f8c6ae10296ef8b2.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-1/4 ">
        <img
          src="https://i.pinimg.com/originals/26/f4/d0/26f4d043ebe807f590043df823e8e028.jpg"
          className="w-full h-full object-cover "
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          {/* <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a> */}
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-2/5 h-11/12 ">
        <img
          src="https://i.pinimg.com/originals/87/98/af/8798af75b9900c808a7ba7f1da01e60b.jpg"
          className="w-full h-full object-cover rounded-xl px-4"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          {/* <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a> */}
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-1/4">
        <img
          src="https://i.pinimg.com/originals/99/29/d8/9929d863f816975559cb20c8c7b96c48.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselCardStory;
