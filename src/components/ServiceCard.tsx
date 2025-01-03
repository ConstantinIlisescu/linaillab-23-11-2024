import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { FaArrowRight } from "react-icons/fa6";
import { Button } from "./ui/button";

interface ServiceCardProp {
  service: {
    price: string;
    serviceName: string;
    serviceDescription: string;
    duration: string;
    additionalInfo?: string[];
  };
}

const ServiceCard = ({ service }: ServiceCardProp) => {
  return (
    <div className="flex flex-col items-center gap-2 pt-5">
      <h3 className="aclonica-regular gradient-text text-large">
        {service.serviceName}
      </h3>
      <div className="flex justify-between w-[90%] ps-5">
        <span className="text-xl gradient-text">{service.price}</span>
        <Sheet>
          <SheetTrigger>
            <Button variant="link" className="rounded-2xl">
              <span className="dark-text-color aboreto-regular text-base">
                Read more
              </span>
              <FaArrowRight className="ms-1 h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="pt-28 w-[90vw] overflow-y-scroll"
            side={"left"}
          >
            <div className="max-w-lg flex flex-col gap-6 mx-auto">
              <div>
                <h3 className="aclonica-regular gradient-text text-xl md:text-2xl mb-2">
                  Wat is {service.serviceName}?
                </h3>
                <p className="pb-4 md:text-lg">{service.serviceDescription}</p>
              </div>
              <div>
                <h3 className="aclonica-regular gradient-text text-xl md:text-2xl">
                  Duration
                </h3>
                <p className="pb-4 md:text-lg">{service.duration}</p>
              </div>
              <div>
                <h3 className="aclonica-regular gradient-text text-xl md:text-2xl">
                  Price
                </h3>
                <p className="pb-4 md:text-lg">{service.price}</p>
              </div>
              {service.additionalInfo && (
                <div>
                  <h3 className="aclonica-regular gradient-text text-xl md:text-2xl">
                    Additional info:
                  </h3>
                  {service.additionalInfo.map((info, index) => (
                    <p
                      key={"service_info_" + index}
                      className="pb-4 md:text-lg"
                    >
                      {info}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <img src="images/eclipse-divider.webp" alt="divider" loading="lazy" />
    </div>
  );
};

export default ServiceCard;
