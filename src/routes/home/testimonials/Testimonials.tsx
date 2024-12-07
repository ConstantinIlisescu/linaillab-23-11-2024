import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/data/mainPage";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center max-w-[100vw]">
      <h2 className="text-4xl pb-10 text-center aclonica-regular gradient-text">
        Testimonials
      </h2>
      <Carousel className="w-3/4 pb-8">
        <CarouselContent className="flex items-center ">
          {TESTIMONIALS.map((comment, index) => (
            <CarouselItem key={"testimonial_" + index}>
              <div className="flex gap-4 ">
                <span className="love-light-regular text-6xl">"</span>
                <p className="text-balance ">{comment}</p>
                <span className="love-light-regular text-6xl self-end translate-y-7">
                  "
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex gap-8">
        <a
          href="https://www.google.co.uk/maps/place/L.I.+Nail+Lab/@52.7133641,-2.0100792,20.33z/data=!4m6!3m5!1s0x487a75a2a6cc418d:0x5b39d3cff4554809!8m2!3d52.7133059!4d-2.0101691!16s%2Fg%2F11kt98gnk9?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex gap-2 w-fit items-center"
        >
          <FaGoogle className="size-8" />
          <span>Google Reviews</span>
        </a>
        <a
          className="flex gap-2 w-fit items-center"
          href="https://www.facebook.com/LINailLab/reviews"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="size-8" />
          <span>Facebook Reviews</span>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
