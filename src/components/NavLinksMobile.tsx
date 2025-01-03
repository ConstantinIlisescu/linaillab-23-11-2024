import { routes } from "@/constants/routes";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { HashLink } from "react-router-hash-link";

const NavLinksMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" aria-label="Open navigation">
        <CgMenuRight className="size-10 " />
      </SheetTrigger>
      <SheetContent className="max-w-64 pt-16">
        <div className="flex flex-col gap-4 text-left ">
          {routes.map((route, index) => (
            <SheetClose asChild key={`nav-link-${index}`}>
              <Link
                to={route.href}
                className="text-2xl font-medium transition-colors"
              >
                {route.label}
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <HashLink
              key={`nav-link-50000`}
              to="#contact"
              className="text-2xl font-medium transition-colors"
            >
              Contact me
            </HashLink>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavLinksMobile;
