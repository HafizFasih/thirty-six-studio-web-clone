import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Circle = () => {
  const text: string[] = "THIRTYSIXSTUDIO — FOR ALL THINGS DIGITAL PRODUCTION — ".split("");
  const radius = 90; 
  const ref= useRef(null);
  useGSAP(() => {
      gsap.to(ref.current, {
        rotate:360,
        repeat:-1,
        duration:15,
        ease:"linear"
      })
  })
  return (
    <div ref={ref} className='relative h-52 w-52 rounded-full mt-40 flex justify-center items-center z-10'>
      {text.map((val, index) => {
        const angle = (index / text.length) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180); 
        const y = radius * Math.sin((angle * Math.PI) / 180); 
        return (
          <span
            key={index}
            className='absolute transform font-semibold flex items-center justify-center'
            style={{
              transform: `translate(-50%, -50%) rotate(${angle - 270}deg)`,
              left: `${50 + x / 2}%`, 
              top: `${50 + y / 2}%`,
              transformOrigin: 'center',
            }}
          >
            {val}
          </span>
        );
      })}
    </div>
  );
};

export default Circle;
