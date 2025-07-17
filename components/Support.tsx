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
          width={550}
          height={120}
          style={{ objectFit: 'contain', maxWidth: '100%', height: '100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          alt="Drshti"
          width={200}
          height={100}
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
        />
      )
    }
  },
  { 
    name: "St. Luke's", 
    id: 15, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/lukes.jpeg"
          alt="St. Luke's"
          width={250}
          height={120}
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
        />
      )
    }
  },
  { 
    name: "VMLY&R", 
    id: 16, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/vert.webp"
          alt="VMLY&R"
          width={200}
          height={100}
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
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
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
        />
      )
    }
  },
  { 
    name: "itc", 
    id: 18, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/itc.png"
          alt="itc"
          width={200}
          height={100}
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
        />
      )
    }
  },
  { 
    name: "samsung", 
    id: 19, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/samsung.png"
          alt="samsung"
          width={200}
          height={100}
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
        />
      )
    }
  },
  { 
    name: "seagram", 
    id: 20, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/seagram.png"
          alt="seagram"
          width={200}
          height={100}
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
        />
      )
    }
  },
  { 
    name: "sol", 
    id: 21, 
    img: function LogoImage(props: SVGProps<SVGSVGElement>) {
      return (
        <Image
          src="/client-list/sol.jpg"
          alt="sol"
          width={200}
          height={100}
          style={{ objectFit: 'contain', maxWidth: '100%',height:'100%' }}
          priority
        />
      )
    }
  },
  
];

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-24">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center space-y-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-subheading font-bold md:mb-4 lg:mb-4 mb-4">
            Our <span className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">Consultants</span> have <span className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">worked</span> with
          </h2>
          <p className="text-lg text-gray-600 mt-4">
          Guided by Data. Backed by Experience. 
          </p>
        </div>
        <LogoCarousel 
          columnCount={typeof window !== 'undefined' && window.innerWidth <= 768 ? 3 : 4} 
          logos={allLogos} 
        />
      </div>
    </div>
  );
}
