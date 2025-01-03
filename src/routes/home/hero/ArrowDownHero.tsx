import ArrowDownMotion from "@/components/motions/ArrowDownMotion";

const ArrowDownHero = () => {
  return (
    <div className="flex justify-center w-full">
      <ArrowDownMotion delay={0}>
        <img
          src="ArrowDown.svg"
          alt=""
          className="h-10 w-full"
          loading="lazy"
        />
      </ArrowDownMotion>
    </div>
  );
};

export default ArrowDownHero;
