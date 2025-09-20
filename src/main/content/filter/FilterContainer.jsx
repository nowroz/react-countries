import { use } from "react";
import LanguageFilter from "./LanguageFilter";

const FilterContainer = ({
  countriesPromise,
  selectedLanguages,
  setSelectedLanguages,
}) => {
  const result = use(countriesPromise);
  const countries = result.countries;

  return (
    <div>
      <LanguageFilter
        countries={countries}
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
      ></LanguageFilter>
    </div>
  );
};

export default FilterContainer;
