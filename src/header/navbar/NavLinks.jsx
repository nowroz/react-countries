import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavLinks = () => {
  return (
    <>
      <PlainLinks></PlainLinks>
      <LinkMenu></LinkMenu>
    </>
  );
};

export default NavLinks;

const PlainLinks = () => {
  return (
    <ul className="hidden sm:flex gap-4">
      <li className="font-inter text-base font-normal text-[#1b263b]">
        <a href="https://github.com/nowroz">Developer</a>
      </li>
      <li className="font-inter text-base font-normal text-[#1b263b]">
        <a href="https://github.com/nowroz/react-countries">Repository</a>
      </li>
    </ul>
  );
};

const LinkMenu = () => {
  return (
    <div className="sm:hidden dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 bg-[#1b263b]">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-[#1b263b] rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <a
            className="hover:bg-[#e0e1dd] hover:text-[#1b263b]"
            href="https://github.com/nowroz"
          >
            Developer
          </a>
        </li>
        <li>
          <a
            className="hover:bg-[#e0e1dd] hover:text-[#1b263b]"
            href="https://github.com/nowroz/react-countries"
          >
            Repository
          </a>
        </li>
      </ul>
    </div>
  );
};
