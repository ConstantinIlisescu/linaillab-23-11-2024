import useScrollToEffect from "@/utils/hooks/useScrollToEffect";
import Container from "@/components/ui/container";
import "./Home.css";
import OutlineBtnWithIcon from "@/components/OutlineBtnWithIcon";
import MainServicesContainer from "@/components/MainServicesContainer";
import { SERVICES } from "@/data/mainPage";
import ContactMeBtn from "@/components/ContactMeBtn";
import ImgWithBorder from "@/components/ImgWithBorder";
import SlideFromRightMotion from "@/components/motions/SlideFromRightMotion";
import ScaleUpMotion from "@/components/motions/ScaleUpMotion";
import ArrowDownMotion from "@/components/motions/ArrowDownMotion";

const Home = () => {
  useScrollToEffect();

  return (
    <div className="relative my-bg-light overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <div className="pt-16 md:pt-20 grid justify-items-stretch h-screen">
          <div
            className="flex justify-self-center my-auto items-center gap-16 px-4
          portrait:flex-col-reverse"
          >
            <div
              className="z-10 
             portrait:-translate-y-44
             sm:portrait:-translate-y-52
             md:portrait:-translate-y-96  md:portrait:translate-x-12
             ms-auto"
            >
              <SlideFromRightMotion delay={1.5}>
                <h1 className="aclonica-regular text-start text-4xl md:text-6xl gradient-text mb-8">
                  ESCAPE <br />
                  YOUR <br />
                  EVERYDAY <br />
                  ROUTINE <br />
                </h1>
              </SlideFromRightMotion>
              <ScaleUpMotion delay={2.5} stiffness={100} damping={50}>
                <div className="flex justify-center w-full">
                  <ContactMeBtn />
                </div>
              </ScaleUpMotion>
            </div>
            <ImgWithBorder
              imgSrc="images/hero.jpg"
              imgAlt="oval image of a hand nails"
            />
          </div>
          <div
            className="flex justify-center w-full 
          portrait:-translate-y-44
          md:portrait:-translate-y-[22rem]"
          >
            <ArrowDownMotion delay={6}>
              <img src="ArrowDown.svg" alt="" className="h-10" />
            </ArrowDownMotion>
          </div>
        </div>
      </div>
      <div className="pt-28 w-full flex ">
        <div className="welcome-overlay hidden"></div>
        <Container>
          <div className="max-w-lg">
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
        </Container>
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
