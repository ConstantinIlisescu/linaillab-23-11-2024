import ImgWithBorder from "@/components/ImgWithBorder";
import TextHero from "./TextHero";
import MyServicesBtn from "./MyServicesBtn";
import ArrowDownHero from "./ArrowDownHero";

const DesktopHero = () => {
  return (
    <div className="hidden landscape:block sm:block mx-auto w-full max-w-6xl">
      <div className="pt-16 lg:pt-10 grid justify-items-stretch h-screen">
        <div className="flex portrait:flex-col-reverse justify-self-center my-auto items-center gap-16 px-4">
          <div className="z-10 ms-auto portrait:-translate-y-80 portrait:translate-x-20">
            <TextHero />
            <MyServicesBtn />
          </div>
          <div className="w-[30vw] portrait:w-[60vw] portrait:-translate-x-36">
            <ImgWithBorder
              imgSrc="images/hero.jpg"
              imgAlt="hand showing beautiful brown long nails"
              outlineBorder={true}
            />
          </div>
        </div>
        <div className="portrait:-translate-y-64">
          <ArrowDownHero />
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;
