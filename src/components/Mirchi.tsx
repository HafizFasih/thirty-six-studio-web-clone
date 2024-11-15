"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import images from "@/images";

interface Detail {
    startInd: number;
    scale: number;
    top: number;
    left: number;
    duration: number;
    zIndex?: number;
  }

  
const Mirchi = ({details}: {details:Detail}) => {
  const [index, setIndex] = useState({value: details.startInd});
  const imageRef = useRef(null);
  useGSAP(() => {
    gsap.to(index,{
        value: details.startInd + 149,
        duration: 2,
        repeat: -1,
        ease: "linear",
        onUpdate:(()=>{
            setIndex({value: Math.round(index.value)})
        })
      }
    );
    gsap.from(imageRef.current, {
      opacity:0,
      scale:0,
    })
  });

  return (
      <Image
      ref={imageRef}
      className="absolute z-50"
      style={{top:`${details.top}%`, left:`${details.left}%`, scale:details.scale, zIndex:details.zIndex}} 
      src={images[index.value]} 
      alt=""
      height={100} 
      width={100}
      priority 
      />
  );
};

export default Mirchi;
