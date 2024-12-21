import "./Services.css";
import Container from "@/components/ui/container";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES_LIST } from "@/data/servicesPage";
import ServicesAdditionalInfo from "@/components/ServicesAdditionalInfo";

const Services = () => {
  return (
    <>
      {SERVICES_LIST.map((service, index) => (
        <div
          id={service.id}
          key={"service_list_" + index}
          className="py-28 my-bg-light overflow-hidden"
        >
          <div
            className={`flex flex-col items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <img
              className={
                index % 2 === 0
                  ? "my-rounded-right-full xl:pe-12"
                  : "my-rounded-left-full xl:ps-12"
              }
              src={service.imgPath}
              alt="art hand nails"
            />

            <Container>
              <div className="">
                <h2 className="text-4xl pb-10 text-center aclonica-regular gradient-text">
                  {service.title}
                </h2>
                <p
                  className={`text-gray-700  md:text-lg py-4  ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  } `}
                >
                  {service.description}
                </p>
                {service.callToAction && (
                  <div
                    className={`max-w-sm w-fit mx-auto md:m-0 ${
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
          <Container>
            <div
              className={
                service.services.length === 1
                  ? "max-w-md mx-auto"
                  : "grid gap-4 md:grid-cols-2 xl:grid-cols-3"
              }
            >
              {service.services.map((service, index) => (
                <ServiceCard
                  key={`${service.serviceName}-${index}`}
                  price={service.price}
                  serviceDescription={service.serviceDescription}
                  serviceName={service.serviceName}
                  duration={service.duration}
                  additionalInfo={service.additionalInfo}
                />
              ))}
            </div>
          </Container>
        </div>
      ))}
    </>
  );
};

export default Services;
