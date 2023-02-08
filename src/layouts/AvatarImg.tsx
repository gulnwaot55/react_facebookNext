import React from "react";

interface Props {
  img: string;
}
export default function AvatarImg({ img }: Props) {
  return (
    <div className="avatar">
      <div className=" w-10 h-10 rounded-full">
        <img src={img} />
      </div>
    </div>
  );
}
