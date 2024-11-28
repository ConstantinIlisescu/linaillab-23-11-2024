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
    <div>
      <div className="mx-auto w-full max-w-6xl">
        <Container>
          <div className="pt-28 pb-4 grid justify-items-stretch h-screen font-italiana">
            <div className="text-start md:justify-self-center my-auto animate-slideInTop opacity-0 [--slideIn-delay:1000ms]">
              <h1 className="aclonica-regular text-6xl gradient-text">
                ESCAPE <br />
                YOUR <br />
                EVERYDAY <br />
                ROUTINE <br />
              </h1>
              <ContactMeBtn />
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-28 mx-auto w-full max-w-6xl">
        <Container>
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
