"use client";

// this is a client component
import { useEffect } from "react";
import Link from "next/link";
import { renderCanvas } from "@/components/ui/canvas"
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

export function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home">
      <div className="animation-delay-8 animate-fadeIn flex  flex-col items-center justify-center px-4 text-center">
       
     
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>
    </section>
  );
};

 
