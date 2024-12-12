import { ADDRESS_AND_CONTACT_INFO, SCHEDULE } from "@/data/contactMePage";
import Container from "@/components/ui/container";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import useScrollToEffect from "@/utils/hooks/useScrollToEffect";

const icons = {
  phone: <FaPhoneFlip className="size-8 text-cyan-500" />,
  email: <MdEmail className="size-8 text-cyan-500" />,
  instagram: <RiInstagramFill className="size-8 text-cyan-500" />,
  facebook: <FaFacebook className="size-8 text-cyan-500" />,
} as { [key: string]: React.ReactNode };

const Footer = () => {
  useScrollToEffect();
  return (
    <>
      <div className="py-16">
        <Container className=" flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-start min-w-56">
            <div className="mb-4">
              {SCHEDULE.scheduledHours.map((schedule) => (
                <div className="flex justify-between max-w-60 text-gray-700 pt-1 md:text-lg text-balance pe-2">
                  <p>{schedule.day}</p>
                  <p>{schedule.status}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            {ADDRESS_AND_CONTACT_INFO.contactInfo.map((contactItem) => (
              <a
                className="flex justify-end pt-3"
                href={contactItem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icons[contactItem.icon]}
                <p className=" pt-1 md:text-lg text-balance pe-2">
                  {contactItem.description}
                </p>
              </a>
            ))}
          </div>
          <iframe
            className="rounded-lg w-[100%] h-60 max-w-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.046325648041!2d-2.0150400118932463!3d52.71330905000383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a75a2a6cc418d%3A0x5b39d3cff4554809!2sL.I.%20Nail%20Lab!5e0!3m2!1sen!2suk!4v1717875626577!5m2!1sen!2suk"
            loading="lazy"
          ></iframe>
        </Container>
      </div>
    </>
  );
};

export default Footer;
