import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

// import Navbar from './../Navbar/navbar';

import Searchbar from "./utils/Searchbar";
import List from "./utils/Lists/List";
import Emptyviews from "./Addons/Emptyviews";
import Filterpane from "./utils/Filter/Filterpane";


import { dataList } from "../data";
import Cookies from "js-cookie";
import { toast } from "react-toastify";



function Market({laborerId}) { 
  const [selectedLsp_type, setSelectedLsp_type] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [clientLoggedIn, setClientLoggedIn] = useState(false);
  const[laborerLoggedIn,setLaborerLoggedIn] = useState(false);
  const [marketplaceData, setMarketplaceData] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const checkClientLoginStatus = async () => {
      try {
        const loggedIn = Cookies.get("loggedIn")
        const clientName = Cookies.get("clientName");
        if(loggedIn === "true" && clientName){
          setClientLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking client login status:', error);
        // Set clientLoggedIn to false in case of an error
        setClientLoggedIn(false);
      }
    };
    
    const checkLaborerLoginStatus = async () => {
      try {
        const loggedIn = Cookies.get("loggedIn")
        const laborerName = Cookies.get("laborerName")
        if(loggedIn === "true" && laborerName){
          setLaborerLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking laborer login status:', error);
        // Set laborerLoggedIn to false in case of an error
        setLaborerLoggedIn(false);
      }
    };
    

    const fetchMarketplaceData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/marketplace/marketplace');
        setMarketplaceData(response.data["data"]);
        const uniqueCategories = [...new Set(response.data["data"].map(item => item.category.toLowerCase()))];
        console.log("unquie",uniqueCategories);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching marketplace data:', error);
      }
    };

    checkClientLoginStatus();
    checkLaborerLoginStatus();
    fetchMarketplaceData();
  }, []);

  const handleClientConnectClick = () => {
    if (clientLoggedIn) {
      console.log("Client is logged in. Proceeding with connect functionality...");
    } else {
      toast.warning("Client: You are not logged in. Please log in to connect.");
    }
  };

  const handleLaborerConnectClick = () => {
    if (laborerLoggedIn) {
      console.log("Laborer is logged in. Proceeding with connect functionality...");
    } else {
      toast.warning("Laborer: You are not logged in. Please log in to connect.");
    }
  }




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

  const [list, setList] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSelectLsp_type = (event, value) =>
    !value ? null : setSelectedLsp_type(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleCheckedCategory = (id) => {
      const updatedCategories = categories.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      console.log("Updated categories:", updatedCategories);
      setCategories(updatedCategories);
    };

    const handleChangeCheckedLsp_type = (id) => {
      const updatedLspTypes = lsp_types.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setlsp_types(updatedLspTypes);
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
    let updatedList = [...marketplaceData];

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

  // Filter by selectedLsp_type if available
    if (selectedLsp_type) {
      updatedList = updatedList.filter(
        (item) => item.type_of_lsp === selectedLsp_type
      );
    }
//category filter
      const selectedCategoryNames = categories
        .filter((category) => category.checked)
        .map((category) => category.label.toLowerCase());
          
      if (selectedCategoryNames.length > 0) {
        updatedList = updatedList.filter((item) =>
          selectedCategoryNames.some((name) =>
            item.category.map((cat) => cat.toLowerCase()).includes(name)
          )
        );
      }

  

    // if (selectedSkills.length) {
    //   updatedList = updatedList.filter((item) => selectedSkills.includes(item));
    //}

    // if (lsp_types) {
    //   const lspChecked = lsp_types.filter((item) => item.checked).map((item) => item.label);
    //   if (lspChecked.length > 0) {
    //     updatedList = updatedList.filter((item) => lspChecked.includes(item.type_of_lsp));
    //   }
    // }

    if (ratings) {
      const ratingChecked = ratings.filter((item) => item.checked).map((item) => item.label);
      if (ratingChecked.length > 0) {
        updatedList = updatedList.filter((item) => ratingChecked.includes(item.rating));
      }
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          (item.firstName.toLowerCase().includes(searchInput.trim()) ||
          item.lastName.toLowerCase().includes(searchInput.trim()) ||
          item.category.toLowerCase().includes(searchInput.trim()))
      );
    }

 
    // Price Filter
    // const minPrice = selectedPrice[0];
    // const maxPrice = selectedPrice[1];

    // updatedList = updatedList.filter(
    //   (item) => item.price >= minPrice && item.price <= maxPrice
    // );

    setList(updatedList);
    setSearchResults(updatedList);
    setResultsFound(updatedList.length > 0);
    setMarketplaceData(updatedList);


    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedRating,
    selectedLsp_type,
    categories,
    lsp_types,
    ratings,
    searchInput,
    selectedPrice,
  ],[]);
  

  

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  
console.log(laborerId);
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
            marketplaceData={marketplaceData}
            selectedPrice={selectedPrice}
            changeChecked_category={handleCheckedCategory} 
            changePrice={handleChangePrice}
            lsp_types={lsp_types}
            changeCheckedLsp_types={handleChangeCheckedLsp_type}
            ratings={ratings}
            changeCheckedRate={handleChangeCheckedRating}
            categories={categories}
            // handleCheckedCategory={handleCheckedCategory}
          />
        </div>
        {/* List & Empty View */}
        <div className="w-3/4 overflow-y-auto overflow-x-hidden flex-1 p-4">
          <div className=" mb-10 pt-3 pl-3 pr-3">
            {/* SearchBar */}
            <Searchbar
              value={searchInput}
              searchData={marketplaceData}
              changeInput={handleSearchInputChange}
            />
          </div>
          {/* {console.log("clientId:", Cookies.get("clientId"))} */}
          <div className="">
            
          {searchResults.length ? (
             <List 
              list={searchResults} 
              handleClientConnectClick={handleClientConnectClick}
              handleLaborerConnectClick={handleLaborerConnectClick}
              clientLoggedIn={clientLoggedIn}
              laborerLoggedIn={laborerLoggedIn}
              clientId={Cookies.get("clientId")} 
              laborerId={Cookies.get("labourId")}
             />
        ) : (
          marketplaceData.length ? (
           <List 
            list={marketplaceData}
            handleClientConnectClick={handleClientConnectClick}
            handleLaborerConnectClick={handleLaborerConnectClick}
            clientLoggedIn={clientLoggedIn}
            laborerLoggedIn={laborerLoggedIn}
            clientId={Cookies.get("clientId")}
            laborerId={Cookies.get("labourId")}
            />
    )      : (
           <Emptyviews />
    )
  )}
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