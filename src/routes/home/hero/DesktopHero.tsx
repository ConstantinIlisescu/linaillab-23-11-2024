import ImgWithBorder from "@/components/ImgWithBorder";
import TextHero from "./TextHero";
import ContactMeHero from "./ContactMeHero";
import ArrowDownHero from "./ArrowDownHero";

const DesktopHero = () => {
  return (
    <div className="hidden landscape:block sm:block mx-auto w-full max-w-6xl">
      <div className="pt-16 md:pt-20 grid justify-items-stretch h-screen">
        <div className="flex portrait:flex-col-reverse justify-self-center my-auto items-center gap-16 px-4">
          <div className="z-10 ms-auto portrait:-translate-y-44">
            <TextHero />
            <ContactMeHero />
          </div>
          <div className="w-[30vw] portrait:w-[60vw]">
            <ImgWithBorder
              imgSrc="images/hero.jpg"
              imgAlt="hand showing beautiful brown long nails"
            />
          </div>
        </div>
        <div className="portrait:-translate-y-36">
          <ArrowDownHero />
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;
