import ContactMeBtn from "@/components/ContactMeBtn";

const HeroMobile = () => {
  return (
    <div>
      {" "}
      <div className=" absolute left-0 bottom-24 z-10 backdrop-blur-lg p-4 w-full">
        <h1 className=" aclonica-regular text-start text-5xl gradient-text-light mb-8">
          ESCAPE <br />
          YOUR <br />
          EVERYDAY <br />
          ROUTINE <br />
        </h1>
        <ContactMeBtn />
      </div>
      <div className="absolute top-8 flex w-full justify-center p-6">
        <img
          src="images/hero.jpg"
          className="oval-shape w-[100vw] sm:w-[70vw] img-shadow rotate-12"
          alt="oval image of a hand"
        />
      </div>
      <div className="absolute bottom-7 flex justify-center w-full">
        <img src="ArrowDown.svg" alt="" className="h-10" />
      </div>
    </div>
  );
};

export default HeroMobile;
