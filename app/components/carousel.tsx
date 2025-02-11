"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselHome() {
    return (
        <section className="w-full px-12 py-8 relative z-0">
            <CarouselPlugin />
        </section>
    )
}

function CarouselPlugin() {
    const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: true })
    )
  
    return (
        <Carousel
            plugins={[plugin.current]} 
            opts={{ loop: true }} 
            className="w-full min-w-full relative z-[100]"
            onMouseEnter={() => plugin.current.stop()} 
            onMouseLeave={() => plugin.current.play()} 
            tabIndex={0} 
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="border-none">
                    <CardContent className="flex items-center justify-center">
                      <img className="w-full rounded-md" src="https://ucarecdn.com/01131802-e01f-4c9a-80fa-88602cbb00dc/banner2.jpeg" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
  
          {/* Tombol Prev */}
          <CarouselPrevious className="bg-[#D4D1D1] border-2 border-white absolute w-20 h-20 hover:bg-white cursor-pointer -left-4 top-1/2 -translate-y-1/2 z-[60]" />
  
          {/* Tombol Next */}
          <CarouselNext className="border-2 bg-[#D4D1D1] border-white w-20 h-20 absolute hover:bg-white -right-4 top-1/2 -translate-y-1/2 z-[60]" />
        </Carousel>

    )
  }
  
