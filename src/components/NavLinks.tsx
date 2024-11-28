import { routes } from "@/constants/routes";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="space-x-4 hidden md:block w-full text-right min-w-fit">
      {routes.map((route, index) => (
        <Link key={`nav-link-${index}`} to={route.href} className="font-medium">
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
