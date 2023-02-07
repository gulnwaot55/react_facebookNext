import React from "react";

export default function AppBar() {
  return (
    <div className="bg-white-400 shadow-xl">
      <header className=" text-white text-start p-2 h-16">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src="https://i.pinimg.com/originals/7a/64/32/7a643277f65fb3f7d544b0e2bfae8abc.jpg" />
          </div>
          <div className=" px-2 flex h-screen justify-center items-center pt-2">
            <input
              type="text"
              placeholder=""
              className="input rounded-full input-md w-full max-w-xs h-8 text-black opacity-90 bg-slate-100 "
            ></input>
          </div>
          
          <div className=" rounded-full w-10 h-10 ">
            <img src="/assets/images/group.png" />
          </div>
          <div className=" rounded-full w-10 h-10 ">
            <img src="/assets/images/group.png" />
          </div>
        </div>
      </header>
    </div>
  );
}
