import ScaleUpMotion from "@/components/motions/ScaleUpMotion";

interface ImgWithBorderProps {
  imgSrc: string;
  imgAlt: string;
  imgClassName?: string | undefined;
  wrapperClassName?: string | undefined;
}

const ImgWithBorder = ({
  imgClassName,
  wrapperClassName,
  imgSrc,
  imgAlt,
}: ImgWithBorderProps) => {
  return (
    <div className={`my-rotate-25 relative w-fit ${wrapperClassName}`}>
      <ScaleUpMotion>
        <img
          src={imgSrc}
          className={`block object-cover relative z-10 oval-shape img-shadow 
            portrait:w-[75vw] 
            portrait:-translate-x-12 portrait:translate-y-12
            sm:portrait:w-[65vw] 
            md:portrait:-translate-x-28 md:portrait:translate-y-28
            landscape:w-[30vw]
            ${imgClassName}`}
          alt={imgAlt}
        />
        <div
          className=" hidden md:block oval-shape absolute w-full h-full bottom-0 left-6 object-border 
      md:portrait:-translate-x-28 md:portrait:translate-y-14"
        ></div>
      </ScaleUpMotion>
    </div>
  );
};

export default ImgWithBorder;
