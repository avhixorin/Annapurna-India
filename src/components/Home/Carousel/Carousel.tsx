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
            <img src="https://res.cloudinary.com/dlzly5cmd/image/upload/v1725520629/pic1_qfuout.jpg" className="rounded-lg" alt="carousel" />
        </CarouselItem>
        <CarouselItem className="flex items-center justify-center">
            <img src="https://res.cloudinary.com/dlzly5cmd/image/upload/v1725520627/aiImg_omifvo.jpg" className="object-contain rounded-lg" alt="carousel" />
        </CarouselItem>
        
      </CarouselContent>
      
    </Carousel>
  );
};

export default CarouselComponent;
