import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import mountains from "@/public/mountains.jpeg";

interface HomepageCarouselProps {
  items: string[];
}

const HomepageCarousel = ({ items }: HomepageCarouselProps) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Carousel>
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              key={item}
              className="bg-green-400 flex justify-center"
            >
              <MyBox />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

function MyBox() {
  return <div className="w-64 h-64 bg-gray-600 border rounded-md">content</div>;
}

function MyImage() {
  return (
    <div>
      <Image src={mountains} alt="mountains" height={250} width={250} />
    </div>
  );
}

export default HomepageCarousel;
