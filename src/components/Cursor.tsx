"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Cursor = ({ size, clicked }: { size: { h: number; w: number }, clicked: boolean }) => {
  const cursor = useRef(null);
  const mirchi = useRef(null);
  useEffect(() => {
    window.addEventListener("mousemove", (data) => {
      gsap.set(cursor.current, {
        height: size.h,
        width: size.w,
      });
      gsap.to(cursor.current, {
        x: data.x - size.w / 2 ,
        y: data.y - (size.h / 2) - 48,
        ease: "linear",
      });
    });
    size.h === 80 && 
    gsap.from(mirchi.current,{
        scale: 0,
        delay:0.1,
        duration:0.5
    })
  });
  return (
    <span
      ref={cursor}
      className={`abc fixed z-[500] ${clicked ? "bg-white" : "bg-[#FD2C2A]"} rounded-full duration-100`}
    >
      {size.h === 80 &&
        <Image
          ref={mirchi}
          src="https://thirtysixstudio.com/peppers/pepperA/149.png"
          alt=""
          objectFit="contain"
          fill={true}
        />
      }
    </span>
  );
};

export default Cursor;
