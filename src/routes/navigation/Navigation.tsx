import Logo from "@/components/logo/Logo";
import NavLinks from "@/components/NavLinks";
import NavLinksMobile from "@/components/NavLinksMobile";
import Container from "@/components/ui/container";

const Navigation = () => {
  return (
    <header className=" py-3 backdrop-blur-lg fixed w-full z-10">
      <Container>
        <nav className="flex justify-between">
          <Logo />
          <NavLinks />
          <NavLinksMobile />
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
