import TextHero from "./TextHero";
import MyServicesBtn from "./MyServicesBtn";
import ArrowDownHero from "./ArrowDownHero";

const MobileHero = () => {
  return (
    <div className="flex flex-col items-center landscape:hidden sm:hidden relative overflow-hidden">
      <img
        src="images/mobile-hero.webp"
        alt="colorful shapes background"
        className="block w-full h-screen object-cover object-center fade-img"
        loading="lazy"
      />
      <div className="absolute bottom-1/3">
        <div>
          <TextHero />
          <MyServicesBtn />
        </div>
        <div className="translate-y-32">
          <ArrowDownHero />
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
