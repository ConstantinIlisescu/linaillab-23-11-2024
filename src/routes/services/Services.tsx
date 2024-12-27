import "./Services.css";
import Container from "@/components/ui/container";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES_LIST } from "@/data/servicesPage";
import ServicesAdditionalInfo from "@/components/ServicesAdditionalInfo";
import OutlineBtnWithIcon from "@/components/OutlineBtnWithIcon";

const Services = () => {
  return (
    <section className="my-bg-light">
      <h1 className="aclonica-regular text-center text-4xl md:text-6xl gradient-text pt-28">
        Services
      </h1>
      {SERVICES_LIST.map((service, index) => (
        <div
          id={service.id}
          key={"service_list_" + index}
          className="py-12 overflow-hidden"
        >
          <div
            className={`flex flex-col items-center pb-8 md:pb-0 testimonial-bg-image ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <img
              className={`z-10 md:max-w-[50vw] ${
                index % 2 === 0
                  ? "my-rounded-right-full xl:pe-12"
                  : "my-rounded-left-full xl:ps-12"
              }`}
              src={service.imgPath}
              alt="art hand nails"
            />

            <Container className="z-10 flex justify-center">
              <div className="max-w-lg mx-auto md:mx-0 ">
                <h2 className="text-4xl pb-10 text-center aclonica-regular gradient-text">
                  {service.title}
                </h2>
                <p className="md:text-lg text-left py-4 ">
                  {service.description}
                </p>
                {service.callToAction && (
                  <div
                    className={`max-w-md w-fit mx-auto ${
                      index % 2 === 0 ? "md:ms-auto" : "md:me-auto"
                    }`}
                  >
                    <ServicesAdditionalInfo
                      additionalInfoObject={service.callToAction}
                    />
                  </div>
                )}
              </div>
            </Container>
          </div>
          <Container className="max-w-3xl py-5">
            <div
              className={
                service.services.length === 1
                  ? "max-w-md mx-auto"
                  : "grid gap-4 md:grid-cols-2"
              }
            >
              {service.services.map((service, index) => (
                <ServiceCard
                  key={`${service.serviceName}-${index}`}
                  service={service}
                />
              ))}
            </div>
          </Container>
          <div className="flex justify-center py-10">
            <OutlineBtnWithIcon text="Contact me" href="#contact" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
