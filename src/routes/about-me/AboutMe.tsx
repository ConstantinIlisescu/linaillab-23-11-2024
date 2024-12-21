import Container from "@/components/ui/container";
import "./AboutMe.css";
import MyServicesBtn from "../home/hero/MyServicesBtn";
import ImgWithBorder from "@/components/ImgWithBorder";
import ArrowDownHero from "../home/hero/ArrowDownHero";
import MySpaceMobile from "./my-space/MySpaceMobile";
import MySpaceDesktop from "./my-space/MySpaceDesktop";

const AboutMe = () => {
  return (
    <section className=" my-bg-light overflow-hidden">
      <div className="py-28 mx-auto w-full">
        <div className="flex portrait:flex-col justify-self-center my-auto items-center gap-16 px-4">
          <div className="w-[30vw] portrait:w-[70vw] portrait:md:w-[50vw] portrait:translate-x-10">
            <ImgWithBorder
              imgSrc="about-me/about-me-picture.png"
              imgAlt="Image of myself with medium length curly hair and green background"
              outlineBorder={true}
              rotate={false}
            />
          </div>
          <div className="portrait:-translate-y-36">
            <h1 className="aclonica-regular portrait:-translate-y-4 text-start text-4xl md:text-6xl gradient-text mb-8">
              My <br />
              Story <br />
            </h1>
            <p className="md:text-lg pb-8 portrait:pb-16 max-w-lg">
              I have always been passionate about nails since I was a little
              girl, when I used to do my friends' nails for fun. Now, I love to
              create beautiful nail designs for my clients, using a variety of
              techniques and products.
            </p>
            <div className="w-full flex portrait:justify-center">
              <MyServicesBtn />
            </div>
          </div>
        </div>
        <div className="portrait:-translate-y-24">
          <ArrowDownHero />
        </div>
      </div>
      <div className="py-28 about-me-bg-image">
        <Container className="flex portrait:flex-col justify-center z-10 relative items-center">
          <div>
            <h2 className="text-4xl text-center aclonica-regular gradient-text pb-8">
              Trainings
            </h2>
            <p className="md:text-lg pb-8 max-w-md">
              I am qualified and certified in manicure, pedicure, gel, polish
              gel, KART pedicure, and nail art. I have completed several
              extensive courses and immersive workshops to keep up with the
              latest trends and innovations in nail care, all while prioritizing
              and maintaining the highest health and safety standards, and
              meticulous hygiene practices. I take hygiene incredibly seriously
              and have an unwavering commitment to never compromise on it.
            </p>
          </div>
          <img
            src="about-me/diplomas.png"
            className="w-[50vw] portrait:w-[80vw]"
            alt="Diplomas of nail technician courses"
          />
        </Container>
      </div>
      <MySpaceMobile />
      <MySpaceDesktop />
    </section>
  );
};

export default AboutMe;
