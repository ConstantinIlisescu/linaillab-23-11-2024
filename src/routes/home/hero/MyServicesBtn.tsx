import ScaleUpMotion from "@/components/motions/ScaleUpMotion";
import ContactMeBtn from "@/components/ContactMeBtn";

const MyServicesBtn = () => {
  return (
    <ScaleUpMotion delay={2.5} stiffness={100} damping={50}>
      <div className="flex justify-center w-full">
        <ContactMeBtn />
      </div>
    </ScaleUpMotion>
  );
};

export default MyServicesBtn;
