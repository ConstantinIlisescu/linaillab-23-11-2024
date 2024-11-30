import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ContactMeBtnProps {
  additionalStyles?: string;
}

const ContactMeBtn = ({ additionalStyles }: ContactMeBtnProps) => {
  return (
    <Link to="#contact" className="w-full">
      <Button
        variant="ghost"
        className={`main-button-gradient rounded-xl p-7 w-full ${additionalStyles}`}
      >
        <p className=" aboreto-regular text-2xl md:text-xl">Contact Me</p>
      </Button>
    </Link>
  );
};

export default ContactMeBtn;
