import Container from "@/components/ui/container";

const MySpaceMobile = () => {
  return (
    <Container className="flex lg:hidden flex-col justify-center py-20">
      <h2 className="text-4xl text-center aclonica-regular gradient-text portrait:translate-x-10 portrait:translate-y-16 portrait:md:translate-x-16 portrait:md:translate-y-28">
        My Space
      </h2>
      <img
        src="about-me/my-space-image-desk.webp"
        className=""
        alt="Diplomas of nail technician courses"
      />
      <div className="mx-auto">
        <p className="md:text-lg pt-8 pb-8 max-w-md">
          Welcome to my cosy garden room salon, thoughtfully designed with your
          comfort in mind.
        </p>
        <p className="md:text-lg pb-8 max-w-md">
          This serene and inviting space was created to ensure you feel relaxed
          and at ease while enjoying your manicure or pedicure. I’ve combined
          warmth, and tranquillity to make your visit a delightful experience
          every time.
        </p>
        <p className="md:text-lg pb-8 max-w-md">
          Step into a cosy space where beauty meets comfort.
        </p>
      </div>
    </Container>
  );
};

export default MySpaceMobile;
