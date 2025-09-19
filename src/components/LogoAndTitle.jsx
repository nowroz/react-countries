import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

FontAwesomeIcon;
const LogoAndTitle = () => {
  return (
    <div className="flex gap-4 items-center">
      <FontAwesomeIcon
        className="text-3xl text-[#1b263b]"
        icon="fa-solid fa-earth-asia"
      />
      <h3 className="font-inter text-3xl font-bold text-[#1b263b]">
        Countries
      </h3>
    </div>
  );
};

export default LogoAndTitle;
