import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CarouselComponent = () => {
  return (
    <Carousel
    className=""
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="flex items-center justify-center">
            <img src="./src/assets/pic1.jpg" className="rounded-lg" alt="carousel" />
        </CarouselItem>
        <CarouselItem className="flex items-center justify-center">
            <img src="./src/assets/aiImg.jpg" className="object-contain rounded-lg" alt="carousel" />
        </CarouselItem>
        
      </CarouselContent>
      
    </Carousel>
  );
};

export default CarouselComponent;
