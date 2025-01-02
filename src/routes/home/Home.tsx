import useScrollToEffect from "@/utils/hooks/useScrollToEffect";
import Container from "@/components/ui/container";
import "./Home.css";
import OutlineBtnWithIcon from "@/components/OutlineBtnWithIcon";
import { SERVICES } from "@/data/mainPage";
import DesktopHero from "./hero/DesktopHero";
import MobileHero from "./hero/MobileHero";
import ImgWithBorder from "@/components/ImgWithBorder";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  useScrollToEffect();

  return (
    <div className="relative my-bg-light overflow-hidden">
      <DesktopHero />
      <MobileHero />
      <div className="landscape:pt-28 w-full flex ">
        <div className="welcome-overlay hidden"></div>
        <Container>
          <div className="max-w-lg mx-auto">
            <div className="text-4xl pb-10">
              <p className="pb-2 aclonica-regular gradient-text">
                WELCOME TO
                <br />
                L.I Nail Lab
              </p>
            </div>
            <p className="text-xl text-balance">
              L.I Nail Lab is a home-based nail salon located in the Hednesford
              neighbourhood, offering a unique and personalized experience that
              combines style and exceptional service. My cosy and inviting salon
              features top-of-the-line products, exclusive polish brands and
              colours. My commitment to quality ensures that every visit to my
              salon feels like a luxurious and indulgent escape in the comfort
              of your own neighbourhood.
            </p>
          </div>
        </Container>
      </div>
      <div className=" pt-28 mx-auto w-full max-w-6xl">
        <Container>
          <div id="services" className="max-w-4xl mx-auto ">
            <h2 className="text-4xl pb-10 text-center aclonica-regular gradient-text">
              {SERVICES.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
              {SERVICES.services.map((service, index) => (
                <div
                  key={"service_" + index}
                  className="max-w-60 justify-self-center relative"
                >
                  <ImgWithBorder
                    imgSrc={`images/${service.image}`}
                    imgAlt="hand showing beautiful brown long nails"
                    outlineBorder={false}
                    overlay={true}
                  />
                  <div className="absolute top-1/2 w-full px-6">
                    <div className="p-2 my-bg-light-transparent rounded-3xl ">
                      <h3 className="ps-4 text-lg pb-2 aclonica-regular gradient-text">
                        {service.title}
                      </h3>
                      <OutlineBtnWithIcon
                        href={service.href}
                        text="Read more"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <div className="flex items-center pt-28">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
