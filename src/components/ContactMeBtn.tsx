import { Button } from "@/components/ui/button";
import { HashLink } from "react-router-hash-link";

interface ContactMeBtnProps {
  additionalStyles?: string;
}

const ContactMeBtn = ({ additionalStyles }: ContactMeBtnProps) => {
  return (
    <HashLink to="/#services" className="w-full">
      <Button
        variant="ghost"
        className={`main-button-gradient rounded-xl p-5  ${additionalStyles}`}
      >
        <p className=" aboreto-regular text-xl md:text-xl">My services</p>
      </Button>
    </HashLink>
  );
};

export default ContactMeBtn;
