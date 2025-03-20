"use client"
import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type AnimationStyle = "from-center" | "from-top" | "from-bottom" | "from-left" | "from-right"

interface HeroVideoDialogProps {
  videoSrc: string
  thumbnailSrc: string
  thumbnailAlt: string
  className?: string
  animationStyle?: AnimationStyle
}

export function HeroVideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt,
  className,
  animationStyle = "from-center",
}: HeroVideoDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className={cn("relative w-full h-full cursor-pointer group", className)}>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
            <div className="bg-white/90 dark:bg-black/70 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <Image
            src={"./dummy.png"}
            alt={thumbnailAlt}
            width={900}
            height={450}
            className="w-full h-full object-cover rounded-xl"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] p-0 bg-transparent border-none">
        <div className="aspect-video w-full h-full">
          <iframe
            src={videoSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}

