import Logo from "@/components/logo/Logo";
import NavLinks from "@/components/NavLinks";
import NavLinksMobile from "@/components/NavLinksMobile";
import Container from "@/components/ui/container";

const Navigation = () => {
  return (
    <header className="backdrop-blur-lg fixed w-full z-50">
      <Container>
        <nav className="flex justify-between items-center py-4">
          <Logo />
          <NavLinks />
          <NavLinksMobile />
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
