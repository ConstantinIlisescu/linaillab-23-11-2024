import ContactMeBtn from "@/components/ContactMeBtn";

const HeroDesktop = () => {
  return (
    <div>
      <div>
        <h1 className="aclonica-regular text-start text-xl lg:text-7xl gradient-text mb-8">
          ESCAPE <br />
          YOUR <br />
          EVERYDAY <br />
          ROUTINE <br />
        </h1>
        <ContactMeBtn />
      </div>
      <img
        src="images/hero.jpg"
        className="oval-shape w-[60vw] md:w-[35vw] xl:w-[25vw] img-shadow rotate-12"
        alt="oval image of a hand"
      />
    </div>
  );
};

export default HeroDesktop;
