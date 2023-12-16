import React, { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({setSearch}) => {
  const handlesearch = (e) => {
    setSearch(e.target.value)
}


return (
    <div className='mt-3'>
        <div className='position-relative'>
            <TextField style={{ width: "100%" }} id="outlined-basic" onChange={handlesearch} label="Search Keyword" variant="outlined" />
            <SearchIcon className='search-icon' />
        </div>
    </div>
)
}


export default SearchField;
