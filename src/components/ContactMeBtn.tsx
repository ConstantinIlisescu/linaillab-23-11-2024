import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ContactMeBtnProps {
  additionalStyles?: string;
}

const ContactMeBtn = ({ additionalStyles }: ContactMeBtnProps) => {
  return (
    <Link to="#contact">
      <Button
        variant="ghost"
        className={`main-button-gradient rounded-xl ${additionalStyles}`}
      >
        <p className="p-1 aboreto-regular">Contact Me</p>
      </Button>
    </Link>
  );
};

export default ContactMeBtn;
