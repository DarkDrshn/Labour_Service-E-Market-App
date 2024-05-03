import React,{useState} from "react";
import { Button, Input } from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Searchbar = ({ value, changeInput, searchData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    console.log("Search button clicked");
    console.log("search-term", searchTerm);

    // Filter the laborers based on the search term
    const filteredData = searchData.filter((laborer) => {
      return (
        laborer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laborer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laborer.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    
    console.log("Search Data:", searchData);
    console.log("Filtered Data:", filteredData);
    // Store the filtered data in state
    setSearchResults(filteredData);
    console.log("result",searchResults)
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
    changeInput(e);
  };

  return (
     <>
    <div className="relative flex 3xl:w-max">
      <Input
        type="search"
        label="Type here..."
        className=""
        value={value}
        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        containerProps={{
          className: "min-w-[288px]",
        }}
        onChange={handleChange}
      />
      <Button size="m" className="absolute right-1 rounded" onClick={handleSearch}>
        Search
      </Button>
            </div>
    </>
  );
};

export default Searchbar;
