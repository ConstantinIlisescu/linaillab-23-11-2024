import TextHero from "./TextHero";
import MyServicesBtn from "./MyServicesBtn";
import ArrowDownHero from "./ArrowDownHero";

const MobileHero = () => {
  return (
    <div className="flex flex-col items-center landscape:hidden sm:hidden">
      <div className="image-container">
        <div className="csv-top z-10"></div>
        <img
          src="images/hero.jpg"
          alt=""
          className="w-full h-fit pt-6 fade-img"
        />
      </div>
      <div className=" px-9 z-10 -translate-y-32">
        <TextHero />
        <MyServicesBtn />
      </div>
      <div className="-translate-y-28">
        <ArrowDownHero />
      </div>
    </div>
  );
};

export default MobileHero;
