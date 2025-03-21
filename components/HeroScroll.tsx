"use client"
import { ContainerScroll } from "./ui/container-scroll-animation"
import { HeroVideoDialog } from "./ui/hero-video-dialog"

export function HeroScrollWithVideo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Elevate your success <br />
              
              <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">With Our <span className="bg-gradient-to-r from-orange-600 via-button to-button text-transparent bg-clip-text">Expertise</span></span>
            </h1>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden h-full">
              <HeroVideoDialog
                className="block dark:hidden h-full"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc={"./dummy.png"}
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  )
}

