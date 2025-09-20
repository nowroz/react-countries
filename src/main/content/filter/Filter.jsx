import { Suspense } from "react";
import FilterContainer from "./FilterContainer";

const Filter = ({
  countriesPromise,
  selectedLanguages,
  setSelectedLanguages,
}) => {
  return (
    <div className="col-span-3">
      <h4 className="font-inter text-xl text-[#1b263b] font-semibold">
        Filter
      </h4>

      <Suspense fallback={<p className="text-[#1b263b]">Loading filters...</p>}>
        <FilterContainer
          countriesPromise={countriesPromise}
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
        ></FilterContainer>
      </Suspense>
    </div>
  );
};

export default Filter;
