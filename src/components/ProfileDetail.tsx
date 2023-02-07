import ProfileUser from "@/layouts/ProfileUser";
import React from "react";



export default function ProfileDetail() {
  return (
    <div className="ggrid grid-flow-col auto-cols-max">
      {profileDetail.map((data) => {
        return <ProfileUser name={data.name} img={data.img} />;
      })}
    </div>
  );
}

const profileDetail = [
    {
      name: "ตี๋ลี้เลอ ปา",
      img: "https://i.pinimg.com/originals/7a/c0/d7/7ac0d71511e4fc3b7be553319e794749.jpg",
    },
    {
      name: "เพื่อน",
      img: "/assets/images/friend.png",
    },
    {
      name: "ที่บันทึกไว้",
      img: "/assets/images/saved.png",
    },
    {
        name: "กลุ่ม",
        img: "/assets/images/group.png",
      },
      {
        name: "ล่าสุด",
        img: "/assets/images/friend.png",
      },
      {
        name: "Marketplace",
        img: "/assets/images/marketplace.png",
      },
      {
        name: "Marketplace",
        img: "/assets/images/marketplace.png",
      },
    
    
  ];