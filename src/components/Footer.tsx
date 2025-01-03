import { ADDRESS_AND_CONTACT_INFO, SCHEDULE } from "@/data/contactMePage";
import Container from "@/components/ui/container";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import Logo from "@/components/logo/Logo";

const icons = {
  phone: <FaPhoneFlip className="size-8" />,
  email: <MdEmail className="size-8 " />,
  instagram: <RiInstagramFill className="size-8" />,
  facebook: <FaFacebook className="size-8" />,
} as { [key: string]: React.ReactNode };

const Footer = () => {
  return (
    <>
      <div id="contact" className="py-16 pt-32">
        <Container className=" flex flex-col justify-between items-center gap-16">
          <div className="flex flex-col md:flex-row gap-24">
            <div className="flex flex-col justify-start min-w-56 gap-8">
              <h2 className="text-4xl text-center aclonica-regular gradient-text z-10">
                Opening Hours
              </h2>
              <div>
                {SCHEDULE.scheduledHours.map((schedule, index) => (
                  <div
                    key={"footer_schedule_" + index}
                    className="flex justify-between max-60 pt-1 text-lg text-balance"
                  >
                    <p>{schedule.day}</p>
                    <p>{schedule.status}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-start min-w-56 gap-8">
              <h2 className="text-4xl text-center aclonica-regular gradient-text z-10">
                Contact Info
              </h2>
              <div className="mx-auto">
                {ADDRESS_AND_CONTACT_INFO.contactInfo.map(
                  (contactItem, index) => (
                    <a
                      key={"footer_contact_" + index}
                      className="flex justify-start pt-3 gap-2"
                      href={contactItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icons[contactItem.icon]}
                      <p className=" pt-1 md:text-lg text-balance pe-2">
                        {contactItem.description}
                      </p>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          <p className=" md:text-lg max-w-lg ">
            To book an appointment, please leave me a message on
            facebook/instagram or any of the above contact methods, and I will
            get back to you as soon as I am free.
          </p>
          <iframe
            title="google map showing my address which is Cannock, Hednesford, 110 Miners way, WS12 4WH"
            className="rounded-3xl w-[100%] h-96 max-w-5xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.046325648041!2d-2.0150400118932463!3d52.71330905000383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a75a2a6cc418d%3A0x5b39d3cff4554809!2sL.I.%20Nail%20Lab!5e0!3m2!1sen!2suk!4v1717875626577!5m2!1sen!2suk"
            loading="lazy"
            referrerPolicy="no-referrer"
          ></iframe>

          <Logo />
        </Container>
      </div>
    </>
  );
};

export default Footer;
