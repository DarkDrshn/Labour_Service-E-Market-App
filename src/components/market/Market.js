import React from "react";
import { useState, useEffect } from "react";
// import Navbar from './../Navbar/navbar';

import Searchbar from "./utils/Searchbar";
import List from "./utils/Lists/List";
import Emptyviews from "./Addons/Emptyviews";
import Filterpane from "./utils/Filter/Filterpane";

import { dataList } from "../data";

function Market() {
  const [selectedLsp_type, setSelectedLsp_type] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [law_category, setLaw_category] = useState([
    { id: 1, checked: false, label: "Carpenter" },
    { id: 2, checked: false, label: "Electrician" },
    { id: 3, checked: false, label: "Plumber" },
    { id: 4, checked: false, label: "Mason" },
    { id: 5, checked: false, label: "Plasterer" },
    { id: 6, checked: false, label: "Painter" },

  ]);

  const [lsp_types, setlsp_types] = useState([
    { id: 1, checked: false, label: "Daily Labour" },
    { id: 2, checked: false, label: "Contract Worker" },
    { id: 3, checked: false, label: "Freelancer" },
  ]);

  const [ratings, setRating] = useState([
    { id: 1, checked: false, label: 1 },
    { id: 2, checked: false, label: 2 },
    { id: 3, checked: false, label: 3 },
    { id: 4, checked: false, label: 4 },
    { id: 5, checked: false, label: 5 },
  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleSelectLsp_type = (event, value) =>
    !value ? null : setSelectedLsp_type(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeCheckedlaw_category = (id) => {
    const law_categoryStateList = law_category;
    const changeCheckedlaw_category = law_categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setLaw_category(changeCheckedlaw_category);
  };

  const handleChangeCheckedLsp_type = (id) => {
    const lspStateList = lsp_types;
    const changeCheckedlsp = lspStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setlsp_types(changeCheckedlsp);
  };

  const handleChangeCheckedRating = (id) => {
    const rateStateList = ratings;
    const changeCheckedRate = rateStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setRating(changeCheckedRate);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice((prev)=>{
      return {
        ...prev
      }
    });
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedLsp_type) {
      updatedList = updatedList.filter(
        (item) => item.type_of_lsp === selectedLsp_type
      );
    }

    // Category Filter
    const law_categoryChecked = law_category
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    // Create an array to store selected skills
    const selectedSkills = [];

    if (law_categoryChecked.length) {
      updatedList.forEach((item) => {
        const skillsArray = item.skills
          .split(",")
          .map((skill) => skill.trim().toLowerCase());
        law_categoryChecked.forEach((selectedSkill) => {
          if (skillsArray.includes(selectedSkill)) {
            selectedSkills.push(item);
          }
        });
      });
    }

    if (selectedSkills.length) {
      updatedList = updatedList.filter((item) => selectedSkills.includes(item));
    }

    const lspChecked = lsp_types
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    console.log(lspChecked);

    if (lspChecked.length) {
      updatedList = updatedList.filter((item) =>
        lspChecked.includes(item.type_of_lsp.toLowerCase())
      );
    }

    const ratingChecked = ratings
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (ratingChecked.length) {
      updatedList = updatedList.filter((item) =>
        ratingChecked.includes(item.rating)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [
    selectedRating,
    selectedLsp_type,
    law_category,
    lsp_types,
    ratings,
    searchInput,
    selectedPrice,
  ]);
  

  return (
    <>
     {/* <Navbar style={{ backgroundColor: '#ff6600' }} />  */}
    <div className="w-full flex flex-col">
      <div className="w-full flex h-screen">
    <div className="w-full flex flex-col">
      <div className="w-full flex h-screen">
        {/* Filter Panel */}
        <div className="w-1/4 overflow-y-auto flex-basis-0 sm:flex-basis-1/4 p-4 pl-4 text-sm">
          <Filterpane
            selectedPrice={selectedPrice}
            skill={law_category}
            changeCheckedLaw_category={handleChangeCheckedlaw_category}
            changePrice={handleChangePrice}
            lsp_types={lsp_types}
            changeCheckedLsp_types={handleChangeCheckedLsp_type}
            ratings={ratings}
            changeCheckedRate={handleChangeCheckedRating}
          />
        </div>
        {/* List & Empty View */}
        <div className="w-3/4 overflow-y-auto overflow-x-hidden flex-1 p-4">
          <div className=" mb-10 pt-3 pl-3 pr-3">
            {/* SearchBar */}
            <Searchbar
              value={searchInput}
              changeInput={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="">
            {resultsFound ? <List list={list} /> : <Emptyviews />}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Market;