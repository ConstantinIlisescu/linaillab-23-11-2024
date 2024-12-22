import ImgWithBorder from "@/components/ImgWithBorder";
import TextHero from "./TextHero";
import MyServicesBtn from "./MyServicesBtn";
import ArrowDownHero from "./ArrowDownHero";

const DesktopHero = () => {
  return (
    <div className="hidden landscape:block sm:block relative overflow-hidden">
      <img
        src="images/desktop-hero.png"
        alt=""
        className="block w-full h-screen object-cover object-center fade-img"
      />
      <div className="absolute bottom-1/3 left-1/3  landscape:bottom-1/4 landscape:left-20">
        <TextHero />
        <MyServicesBtn />
      </div>
      <div className="absolute bottom-44 landscape:bottom-10 left-1/2">
        <ArrowDownHero />
      </div>
    </div>
  );
};

export default DesktopHero;
