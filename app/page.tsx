"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

export default function LatestCarousel() {

  return (
    <Carousel className="px-4 md:px-6"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <Card style={{backgroundImage: `url(https://res.cloudinary.com/cloudinary-marketing/images/c_lfill,w_977,ar_1.82,g_auto/f_auto,q_auto/v1681925806/Web_Assets/blog/e55b710c902a902638c02c5ee2d0a6e5b9a4f3ac-1280x720-1_27962aaae1/e55b710c902a902638c02c5ee2d0a6e5b9a4f3ac-1280x720-1_27962aaae1-jpg)`, backgroundSize: "cover", backgroundPosition: "center",}}>
            <div className="bg-gradient-to-t from-black to-transparent rounded-lg">
              <CardHeader>
                <CardTitle className="bg-secondary w-fit p-2 rounded">AstroPhysics</CardTitle>
              </CardHeader>
              <CardContent>
                <br />
                <br />
                <br />
                <br className="hidden md:flex" />
                <br className="hidden md:flex" />
                <br className="hidden md:flex" />
                <br className="hidden md:flex" />
              </CardContent>
              <CardFooter className="text-white">
                Rapid nongenomic estrogen signaling controls alcohol drinking behavior in mice
              </CardFooter>
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card style={{backgroundImage: `url(https://res.cloudinary.com/cloudinary-marketing/images/c_lfill,w_977,ar_1.82,g_auto/f_auto,q_auto/v1681925806/Web_Assets/blog/e55b710c902a902638c02c5ee2d0a6e5b9a4f3ac-1280x720-1_27962aaae1/e55b710c902a902638c02c5ee2d0a6e5b9a4f3ac-1280x720-1_27962aaae1-jpg)`, backgroundSize: "cover", backgroundPosition: "center",}}>
            <div className="bg-gradient-to-t from-black to-transparent rounded-lg">
              <CardHeader>
                <CardTitle className="bg-secondary w-fit p-2 rounded">AstroPhysics</CardTitle>
              </CardHeader>
              <CardContent>
                <br />
                <br />
                <br />
                <br className="hidden md:flex" />
                <br className="hidden md:flex" />
                <br className="hidden md:flex" />
                <br className="hidden md:flex" />
              </CardContent>
              <CardFooter className="text-white">
                Rapid nongenomic estrogen signaling controls alcohol drinking behavior in mice
              </CardFooter>
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card style={{backgroundImage: `url(https://res.cloudinary.com/cloudinary-marketing/images/c_lfill,w_977,ar_1.82,g_auto/f_auto,q_auto/v1681925806/Web_Assets/blog/e55b710c902a902638c02c5ee2d0a6e5b9a4f3ac-1280x720-1_27962aaae1/e55b710c902a902638c02c5ee2d0a6e5b9a4f3ac-1280x720-1_27962aaae1-jpg)`, backgroundSize: "cover", backgroundPosition: "center",}}>
            <div className="bg-gradient-to-t from-black to-transparent rounded-lg">
              <CardHeader>
                <CardTitle className="bg-secondary w-fit p-2 rounded">AstroPhysics</CardTitle>
              </CardHeader>
              <CardContent>
                <br />
                <br />
                <br />
                <br className="hidden md:flex" />
                <br className="hidden md:flex" />
                <br className="hidden md:flex" />
                <br className="hidden md:flex" />
              </CardContent>
              <CardFooter className="text-white">
                Rapid nongenomic estrogen signaling controls alcohol drinking behavior in mice
              </CardFooter>
            </div>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-7 md:left-10 bg-primary text-white" />
      <CarouselNext className=" absolute right-7 md:right-10 bg-primary text-white" />
    </Carousel>
  )
}