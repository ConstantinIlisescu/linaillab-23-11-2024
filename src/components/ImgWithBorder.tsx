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
      <img
        src={imgSrc}
        className={`block w-full object-cover relative z-10 oval-shape img-shadow 
            ${imgClassName}`}
        alt={imgAlt}
      />
      <div
        className=" hidden md:block oval-shape absolute w-full h-full bottom-0 left-6 object-border 
      md:portrait:-translate-x-28 md:portrait:translate-y-14"
      ></div>
    </div>
  );
};

export default ImgWithBorder;
