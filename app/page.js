"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from "next/image";
export default function Home() {
  const gridItems = [
    { title: '1', link: 'https://www.hackerrank.com/block1' },
    { title: '2', link: 'https://www.hackerrank.com/block2' },
    { title: '3', link: 'https://www.hackerrank.com/block3' },
    { title: '4', link: 'https://www.hackerrank.com/block4' },
    { title: '5', link: 'https://www.hackerrank.com/block5' },
    { title: '6', link: 'https://www.hackerrank.com/block6' },
    { title: '7', link: 'https://www.hackerrank.com/block7' },
    { title: '8', link: 'https://www.hackerrank.com/block8' },
    { title: '9', link: 'https://www.hackerrank.com/block9' }
  ];

  useEffect(() => {
    // GSAP Animation for grid items
    gsap.fromTo('.grid-item',
      {
        opacity: 0,
        scale: 0.7,
        boxShadow: '0 0 0px rgba(0,0,0,0)'
      },
      {
        opacity: 1,
        scale: 1,
        boxShadow: '0 0 20px rgba(66, 255, 249, 0.5)',
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.7)'
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="text-center mb-10 flex flex-col justify-center">
        <Image
          alt="something"
          src={require('../public/logoo.png')}
          width='200'
          height='200'
          className='self-center'
        />
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-wide">
          Technovanza 2024
        </h1>
        <h3 className="text-4xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-wide">
          Bit By Bit
        </h3>
        <p className="text-gray-400 mt-2 text-sm md:text-lg">
          Dimensional Drift: Unveiling Tech`s Parallel Worlds
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-6 w-full max-w-2xl">
        {gridItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="grid-item transform transition-all duration-300 hover:scale-105 hover:rotate-3 
                       bg-[#112240] border border-cyan-500/20 rounded-xl 
                       flex flex-col items-center justify-center p-4 md:p-6 
                       text-center cursor-pointer 
                       hover:bg-[#1d2d4e] hover:shadow-[0_0_25px_rgba(66,255,249,0.3)]
                       active:scale-95"
            target="_blank"
          >
            <h3 className="text-md md:text-xl font-bold text-cyan-300 mb-1">{item.title}</h3>
          </a>
        ))}
      </div>

    </div>
  );
}
