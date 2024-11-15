"use client";
import LocomotiveScroll from "locomotive-scroll";
import Cursor from "@/components/Cursor";
import Mirchi from "@/components/Mirchi";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Circle from "@/components/Circle";
import Navbar from "@/components/Navbar";
const details = [
  {
    startInd: 0,
    scale: 1.6,
    top: 20,
    left: 30,
    duration: 4,
    zIndex: 1,
  },
  {
    startInd: 150,
    scale: 2.5,
    top: 70,
    left: 80,
    duration: 3,
  },
  {
    startInd: 300,
    scale: 2,
    top: 20,
    left: 70,
    duration: 4.5,
    zIndex: 1,
  },
  {
    startInd: 450,
    scale: 1,
    top: 10,
    left: 52,
    duration: 3.5,
  },
  {
    startInd: 600,
    scale: 1.6,
    top: 20,
    left: 10,
    duration: 2,
  },
  {
    startInd: 750,
    scale: 2.6,
    top: 50,
    left: 50,
    duration: 5.6,
  },
  {
    startInd: 900,
    scale: 2,
    top: 65,
    left: 20,
    duration: 7,
  },
  {
    startInd: 450,
    scale: 2,
    top: 130,
    left: 20,
    duration: 3,
    zIndex: 1,
  },
  {
    startInd: 900,
    scale: 2,
    top: 150,
    left: 70,
    duration: 5,
  },
  {
    startInd: 300,
    scale: 2,
    top: 100,
    left: 60,
    duration: 4,
  },
];
export default function Home() {
  const [hover, setHover] = useState({ h: 20, w: 20 });
  const [animator, setAnimator] = useState(false);
  const heading = useRef<HTMLHeadingElement | null>(null);
  const grow = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useGSAP(() => {
    const currentHeading = heading.current;
    if (currentHeading)
      currentHeading.addEventListener("click", (data) => {
        gsap.set(grow.current, {
          x: data.x,
          y: data.y,
        });
      });
  }, [animator]);
  useEffect(() => {
    gsap.to(grow.current, {
      scale: animator ? 1000 : 0,
      duration: 0.5,
      delay: 0.1,
    });
  }, [animator]);
  return (
    <>
      <Navbar color={animator} />
      {animator &&
        details.map((val, ind) => <Mirchi key={ind} details={val} />)}
      <Cursor size={hover} clicked={animator} />
      <main className="relative h-[150vh] w-full overflow-hidden">
        <div className="w-full flex">
          <div className="w-2/5 ml-72">
            <h3 className="w-[70%] text-4xl my-12 z-10 relative">
              At Thirtysixstudio, <br></br>we build <br></br>immersive digital
              experiences for brands with a purpose.
            </h3>
            <p className="w-[70%] my-8  leading-tight tracking-tight z-10">
              Were a boutique production studio focused on design, motion, and
              creative technology, constantly reimagining what digital craft can
              do for present-time ads and campaigns.
            </p>
            <p>Scroll</p>
          </div>
          <Circle />
        </div>
        <span
          onClick={() => {
            setAnimator(!animator)
            window.scrollTo({
              top: 0,
              behavior: "smooth", 
            });
          }}
          ref={heading}
          onMouseEnter={() => setHover({ h: 80, w: 80 })}
          onMouseLeave={() => setHover({ h: 20, w: 20 })}
          className="absolute bottom-0 h-56 z-[1000] w-full"
        ></span>
        <span
          ref={grow}
          className="fixed z-[-1] h-1 w-1 -translate-x-1 -translate-y-1 bg-[#FD2C2A] rounded-full"
        ></span>
        <h1 className="absolute bottom-0 left-10 leading-none text-[180px] font-[450] capitalize font-sans z-10">
          thirtysixstudio
        </h1>
      </main>
      <div className="h-32"></div>
    </>
  );
}
