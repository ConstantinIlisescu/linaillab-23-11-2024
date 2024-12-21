import TextHero from "./TextHero";
import MyServicesBtn from "./MyServicesBtn";
import ArrowDownHero from "./ArrowDownHero";

const MobileHero = () => {
  return (
    <div className="flex flex-col items-center landscape:hidden sm:hidden ">
      <img src="images/hero.png" alt="" className="w-[100vw] pt-6" />
      <div className=" px-9 z-10 -translate-y-56">
        <TextHero />
        <MyServicesBtn />
      </div>
      <div className="-translate-y-40">
        <ArrowDownHero />
      </div>
    </div>
  );
};

export default MobileHero;
