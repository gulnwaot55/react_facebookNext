import React from "react";
import CardImg from "@/layouts/CardImg";

export default function StoryCardView() {
  const dataList = [
    {
      name: "Name1",
      img: "https://i.pinimg.com/originals/7a/c0/d7/7ac0d71511e4fc3b7be553319e794749.jpg",
    },
    {
      name: "Name2",
      img: "https://i.pinimg.com/originals/9e/94/80/9e948085228214b6f0c357f8e593560c.jpg",
    },
    {
      name: "Name3",
      img: "https://i.pinimg.com/originals/c0/b7/aa/c0b7aa2bad38cb46700afa496a70f72c.jpg",
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
