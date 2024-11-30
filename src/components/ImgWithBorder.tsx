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
    <div className={`rotate-12 relative w-fit ${wrapperClassName}`}>
      <img
        src={imgSrc}
        className={`block object-cover relative z-10 oval-shape img-shadow w-[60vw] md:w-[30vw] xl:w-[35vw] max-w-md ${imgClassName}`}
        alt={imgAlt}
      />
      <div className="oval-shape absolute w-full h-full bottom-0 left-6 object-border"></div>
    </div>
  );
};

export default ImgWithBorder;
