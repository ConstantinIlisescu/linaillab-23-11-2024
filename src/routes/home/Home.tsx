import useScrollToEffect from "@/utils/hooks/useScrollToEffect";
import Container from "@/components/ui/container";
import "./Home.css";
import OutlineBtnWithIcon from "@/components/OutlineBtnWithIcon";
import MainServicesContainer from "@/components/MainServicesContainer";
import { SERVICES } from "@/data/mainPage";
import ContactMeBtn from "@/components/ContactMeBtn";

const Home = () => {
  useScrollToEffect();

  return (
    <div className="my-bg-light overflow-y-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <div className="pt-10 md:pt-20 grid justify-items-stretch h-screen">
          <div className=" hidden md:flex md:justify-self-center my-auto items-center gap-16 px-4">
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
          <div className="relative md:hidden">
            <div className=" absolute left-10 bottom-32 z-10 backdrop-blur-lg p-4">
              <h1 className=" aclonica-regular text-start text-4xl gradient-text-light mb-8">
                ESCAPE <br />
                YOUR <br />
                EVERYDAY <br />
                ROUTINE <br />
              </h1>
              <ContactMeBtn />
            </div>
            <img
              src="images/hero.jpg"
              className="absolute right-10 bottom-10 oval-shape w-[70vw] img-shadow rotate-12"
              alt="oval image of a hand"
            />
          </div>
        </div>
      </div>
      <div className="pt-28 w-full flex ">
        <div className="welcome-overlay"></div>
        <div className="max-w-lg md:pl-16">
          <div className="text-4xl pb-10">
            <p className="pb-2 aclonica-regular gradient-text">
              WELCOME TO
              <br />
              L.I Nail Lab
            </p>
          </div>
          <p className=" pr-10 md:text-lg text-balance">
            L.I Nail Lab is a home-based nail salon located in the Hednesford
            neighbourhood, offering a unique and personalized experience that
            combines style and exceptional service. My cosy and inviting salon
            features top-of-the-line products, exclusive polish brands and
            colours, a range of free soft drinks and homemade coffee. My
            commitment to quality ensures that every visit to my salon feels
            like a luxurious and indulgent escape in the comfort of your own
            neighbourhood.
          </p>
        </div>
      </div>
      <div className=" pt-28 mx-auto w-full max-w-6xl">
        <Container>
          <div className="max-w-lg ml-auto md:pr-16">
            <div className="text-4xl pb-10 text-right ">
              <p className="aclonica-regular gradient-text">{SERVICES.title}</p>
            </div>
            <div className="space-y-8">
              {SERVICES.services.map((service, index) => (
                <MainServicesContainer
                  key={`${service.title}-${index}`}
                  title={service.title}
                  titleColour={service.titleColour}
                  description={service.description}
                >
                  <OutlineBtnWithIcon
                    additionalStyles={service.buttonAdditionalStyles}
                    text={service.buttonText}
                    href={service.href}
                  />
                </MainServicesContainer>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
