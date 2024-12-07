import ImgWithBorder from "@/components/ImgWithBorder";
import TextHero from "./TextHero";
import ContactMeHero from "./ContactMeHero";
import ArrowDownHero from "./ArrowDownHero";

const DesktopHero = () => {
  return (
    <div className="hidden landscape:block mx-auto w-full max-w-6xl">
      <div className="pt-16 md:pt-20 grid justify-items-stretch h-screen">
        <div className="flex justify-self-center my-auto items-center gap-16 px-4">
          <div className="z-10 ms-auto">
            <TextHero />
            <ContactMeHero />
          </div>
          <div className="w-[30vw]">
            <ImgWithBorder
              imgSrc="images/hero.jpg"
              imgAlt="hand showing beautiful brown long nails"
            />
          </div>
        </div>
        <ArrowDownHero />
      </div>
    </div>
  );
};

export default DesktopHero;
