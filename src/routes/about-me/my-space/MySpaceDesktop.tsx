import Container from "@/components/ui/container";

const MySpaceDesktop = () => {
  return (
    <Container className="hidden lg:flex flex-col justify-center py-28 relative">
      <img
        src="about-me/my-space-image-desk.png"
        className=""
        alt="My cosy garden room salon"
      />
      <div className="absolute top-44 right-96">
        <h2 className="text-4xl  aclonica-regular gradient-text ">My Space</h2>
        <p className="text-lg pt-8 pb-8 max-w-lg">
          Welcome to my cosy garden room salon, thoughtfully designed with your
          comfort in mind.
        </p>
        <p className="text-lg pb-8 max-w-lg">
          This serene and inviting space was created to ensure you feel relaxed
          and at ease while enjoying your manicure or pedicure. I’ve combined
          warmth, and tranquillity to make your visit a delightful experience
          every time.
        </p>
        <p className="text-lg pb-8 max-w-lg">
          Step into a cosy space where beauty meets comfort.
        </p>
      </div>
    </Container>
  );
};

export default MySpaceDesktop;
