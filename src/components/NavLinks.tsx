import { routes } from "@/constants/routes";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <div className="space-x-4 hidden md:block w-full text-right min-w-fit">
      {routes.map((route, index) => (
        <Link key={`nav-link-${index}`} to={route.href} className="font-medium">
          {route.label}
        </Link>
      ))}
      <HashLink key={`nav-link-50000`} to="#contact" className="font-medium">
        Contact me
      </HashLink>
    </div>
  );
};

export default NavLinks;
