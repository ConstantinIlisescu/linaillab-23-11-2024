interface ImgWithBorderProps {
  imgSrc: string;
  imgAlt: string;
  imgClassName?: string | undefined;
  wrapperClassName?: string | undefined;
  outlineBorder?: boolean;
  overlay?: boolean;
  rotate?: boolean;
}

const ImgWithBorder = ({
  imgClassName,
  wrapperClassName,
  imgSrc,
  imgAlt,
  outlineBorder = false,
  overlay = false,
  rotate = true,
}: ImgWithBorderProps) => {
  return (
    <div
      className={` relative w-fit ${wrapperClassName} ${
        rotate && "my-rotate-25"
      }`}
    >
      {overlay && (
        <div className="oval-shape absolute w-full h-full top-0 left-0 my-overlay-transparent z-20"></div>
      )}
      <img
        src={imgSrc}
        className={`block w-60 h-[auto] object-cover relative z-10 oval-shape img-shadow 
            ${imgClassName}`}
        alt={imgAlt}
        loading="lazy"
      />
      {outlineBorder && (
        <div className=" hidden md:block oval-shape absolute w-full h-full bottom-0 left-6 object-border"></div>
      )}
    </div>
  );
};

export default ImgWithBorder;
