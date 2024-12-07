import ArrowDownMotion from "@/components/motions/ArrowDownMotion";

const ArrowDownHero = () => {
  return (
    <div className="flex justify-center w-full">
      <ArrowDownMotion delay={5}>
        <img src="ArrowDown.svg" alt="" className="h-10" />
      </ArrowDownMotion>
    </div>
  );
};

export default ArrowDownHero;
