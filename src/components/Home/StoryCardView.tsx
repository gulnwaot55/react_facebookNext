import React from "react";
import Image from "next/image";
import CardImg from "@/layouts/CardImg";

export default function StoryCardView() {
  const dataList = [
    {
      name: "dddd",
      img: "https://i.pinimg.com/originals/7a/c0/d7/7ac0d71511e4fc3b7be553319e794749.jpg",
    },
    {
      name: "ggggg",
      img: "https://i.pinimg.com/originals/7a/c0/d7/7ac0d71511e4fc3b7be553319e794749.jpg",
    },
    {
      name: "ggggg",
      img: "https://i.pinimg.com/originals/7a/c0/d7/7ac0d71511e4fc3b7be553319e794749.jpg",
    },
    
  ];

  return (
    <div className="grid grid-cols-3">
    
      {dataList.map((data) => {
        return <CardImg name={data.name} img={data.img} />;
      })}
    
    </div>
  );
}
