import TextHero from "./TextHero";
import MyServicesBtn from "./MyServicesBtn";
import ArrowDownHero from "./ArrowDownHero";

const DesktopHero = () => {
  return (
    <div className="hidden landscape:flex sm:flex relative overflow-hidden  flex-col items-center">
      <img
        src="images/desktop-hero.png"
        alt=""
        className="block w-full h-screen object-cover object-center fade-img"
      />
      <div className="absolute bottom-1/3 ">
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
