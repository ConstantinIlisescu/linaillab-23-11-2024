import TextHero from "./TextHero";
import MyServicesBtn from "./MyServicesBtn";
import ArrowDownHero from "./ArrowDownHero";

const MobileHero = () => {
  return (
    <div className="flex flex-col items-center landscape:hidden sm:hidden relative overflow-hidden">
      <img
        src="images/mobile-hero.webp"
        alt=""
        className="block w-full h-screen object-cover object-center fade-img"
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
