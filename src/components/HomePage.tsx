import React from "react";

export default function HomePage() {
  return (
    <div className=" grid grid-cols-4 p-10 bg-white-200 h-screen ">
      <TabMenu />
      <div className=" opacity-95 rounded-lg col-span-2 mx-10 bg-slate-100">
        <StoryView />
      </div>
      <div className="  col-span-1">Page</div>
    </div>
  );
}

function TabMenu() {
  return (
    <div className=" grid grid-rows-3 grid-flow-col  items-start">
      <div className="grid grid-cols-3 col-span-1  ">
        <div className="avatar col-span-1">
          <div className="w-10 h-10 rounded-full">
            <img src="https://i.pinimg.com/originals/f3/69/2d/f3692dc82648166a085b00b0c1a5f1cb.jpg" />
          </div>
        </div>
        <div className=" text-white pt-2">User Name</div>
      </div>
      <div className="grid grid-cols-3 col-span-2  ">
        <div className="avatar placeholder h-10">
          <div className="bg-white text-white rounded-full w-10">
            <span className="text-xs">AA</span>
          </div>
        </div>
        <div className=" text-white pt-2">Friend</div>
      </div>
    </div>
  );
}

function StoryView() {
  return (
    <div className="grid grid-cols-3">
      <div className="bg-black rounded-lg h-60 w-40 m-10"></div>;
    </div>
  );
}
