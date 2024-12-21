import { SlideFromRightMotion } from "@/components/motions/SlideFromRightMotion";

const TextHero = () => {
  return (
    <SlideFromRightMotion delay={1}>
      <h1 className="aclonica-regular text-start text-4xl md:text-6xl gradient-text mb-8">
        ESCAPE <br />
        YOUR <br />
        EVERYDAY <br />
        ROUTINE <br />
      </h1>
    </SlideFromRightMotion>
  );
};

export default TextHero;
