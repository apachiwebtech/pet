import React, { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="position-relative">
      <TextField
        style={{ width: "100%" }}
        id="outlined-basic"
        label="Search Keyword"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
      />
      {!inputValue && <SearchIcon className="search-icon" />}
    </div>
  );
};

export default SearchField;
