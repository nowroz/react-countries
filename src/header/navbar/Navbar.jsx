import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoAndTitle from "../../components/LogoAndTitle";
import NavLinks from "./NavLinks";

FontAwesomeIcon;
const Navbar = () => {
  return (
    <nav className="bg-[#edede9]">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <LogoAndTitle></LogoAndTitle>
        <NavLinks></NavLinks>
      </div>
    </nav>
  );
};

export default Navbar;
