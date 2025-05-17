"use client";

import React, { type SVGProps } from "react";

import { LogoCarousel } from "./logo-carousel";
import Image from "next/image";

const allLogos = [
  { 
    name: "Birla Sun Life Insurance", 
    id: 1, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/birla-sun-life.webp"
          alt="Birla Sun Life Insurance"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "Contract", 
    id: 2, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/contract.png"
          alt="Contract"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "Evalueserve", 
    id: 3, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/evalueserve.webp"
          alt="Evalueserve"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "Drshti", 
    id: 4, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/drishit.png"
          alt="Drshit"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "everest", 
    id: 5, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/everest.jpg"
          alt="everest"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "hind", 
    id: 6, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/hind.jpeg"
          alt="hind"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "idea", 
    id: 7, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/idea.webp"
          alt="idea"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "kantar", 
    id: 8, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/kantar.avif"
          alt="kantar"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "kotak", 
    id: 9, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/kotak.png"
          alt="kotak"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "mul", 
    id: 10, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/mul.png"
          alt="mul"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "ni", 
    id: 11, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/ni.png"
          alt="ni"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "plan", 
    id: 12, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/plan.jpeg"
          alt="plan"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "plas", 
    id: 13, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/plas.jpeg"
          alt="plas"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "red", 
    id: 14, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/red.jpg"
          alt="red"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "lukes", 
    id: 15, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/lukes.jpeg"
          alt="lukes"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "vert", 
    id: 16, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/vert.webp"
          alt="webp"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  { 
    name: "zen", 
    id: 17, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/zen.png"
          alt="zen"
          width={200}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />
      )
    }
  },
  
  
  // { name: "Vercel", id: 4, img: VercelIcon },
  // ... rest of the logos remain unchanged ...
];

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-24">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center space-y-8">
        <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-subheading font-bold md:mb-4 lg:mb-4 mb-4 ">Already <span className="bg-gradient-to-r from-orange-600 via-button to-button
               text-transparent bg-clip-text">Chosen</span> By</h2>
            <p className="text-lg text-gray-600 mt-4">
                Trusted by the world's best 
            </p>
        </div>

        <LogoCarousel columnCount={5} logos={allLogos} /> 
      </div>
    </div>
  );
}
