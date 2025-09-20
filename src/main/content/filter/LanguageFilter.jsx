import { useState } from "react";

const LanguageFilter = ({
  countries,
  selectedLanguages,
  setSelectedLanguages,
}) => {
  const getLanguages = () => {
    let allLanguages = [];

    countries.forEach(({ languages: { languages: countryLanguages } }) => {
      Object.values(countryLanguages).forEach((lang) => {
        allLanguages.includes(lang) || allLanguages.push(lang);
      });
    });

    return allLanguages.sort();
  };

  const languages = getLanguages();

  return (
    <fieldset className="bg-white rounded-box p-4">
      <legend className="font-inter text-base font-bold text-[#1b263b]">
        Language
      </legend>
      <div className="h-[350px] flex flex-col gap-2 overflow-scroll text-[#1b263b]">
        {languages.map((language) => (
          <LanguageCheckbox
            key={language}
            language={language}
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
          ></LanguageCheckbox>
        ))}
      </div>
    </fieldset>
  );
};

export default LanguageFilter;

const LanguageCheckbox = ({
  language,
  selectedLanguages,
  setSelectedLanguages,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    if (isChecked === false) {
      selectedLanguages.includes(language) ||
        setSelectedLanguages([...selectedLanguages, language]);
    } else {
      const copy = [...selectedLanguages];

      const index = selectedLanguages.indexOf(language);
      copy.splice(index, 1);

      setSelectedLanguages(copy);
    }

    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-start gap-3 font-inter text-sm font-normal text-[#1b263b]">
      <input
        onChange={handleCheck}
        checked={isChecked}
        className="w-4 aspect-square"
        type="checkbox"
        name="language"
      />
      {language}
    </label>
  );
};
