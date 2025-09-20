import { useState } from "react";
import Filter from "./filter/Filter";

const getCountriesPromise = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/all");

  return response.json();
};

const MainContent = () => {
  const countriesPromise = getCountriesPromise();

  const [selectedLanguages, setSelectedLanguages] = useState([]);

  return (
    <section className="container mx-auto p-4 grid grid-cols-14">
      <Filter
        countriesPromise={countriesPromise}
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
      ></Filter>
      <div className="col-span-11 text-black border">Card</div>
    </section>
  );
};

export default MainContent;
