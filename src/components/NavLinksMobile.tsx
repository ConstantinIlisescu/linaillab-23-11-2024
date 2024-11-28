import { routes } from "@/constants/routes";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

const NavLinksMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <CgMenuRight className="size-10 " />
      </SheetTrigger>
      <SheetContent className="max-w-64 pt-16">
        <div className="flex flex-col gap-4 text-left ">
          {routes.map((route, index) => (
            <SheetClose asChild>
              <Link
                key={`nav-link-${index}`}
                to={route.href}
                className="text-2xl font-medium transition-colors"
              >
                {route.label}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavLinksMobile;
